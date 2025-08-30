"use client"

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import { useTheme } from "next-themes"

export const DrawingCanvas = forwardRef(function DrawingCanvas(
  { tool = "brush", color = "#000000", brushSize = 5, opacity = 1, onHistoryChange = () => {} },
  ref,
) {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      const width = container.clientWidth
      const height = container.clientHeight

      // Set display size (css pixels)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      // Set actual size in memory (scaled for high DPI)
      const scale = window.devicePixelRatio
      canvas.width = Math.floor(width * scale)
      canvas.height = Math.floor(height * scale)

      setCanvasSize({ width, height })

      // Normalize coordinate system to use css pixels
      const ctx = canvas.getContext("2d")
      ctx.scale(scale, scale)

      // Set default styles
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.globalAlpha = opacity
      ctx.strokeStyle = color
      ctx.lineWidth = brushSize

      contextRef.current = ctx

      // If this is the first resize, save initial state to history
      if (history.length === 0) {
        saveToHistory()
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  // Update context when tool properties change
  useEffect(() => {
    if (!contextRef.current) return

    contextRef.current.globalAlpha = opacity
    contextRef.current.strokeStyle = color
    contextRef.current.lineWidth = brushSize

    // If tool is eraser, set composite operation to destination-out
    if (tool === "eraser") {
      contextRef.current.globalCompositeOperation = "destination-out"
    } else {
      contextRef.current.globalCompositeOperation = "source-over"
    }
  }, [tool, color, brushSize, opacity])

  // Save canvas state to history
  const saveToHistory = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Create a copy of the current canvas state
    const newHistory = [...history.slice(0, historyIndex + 1), canvas.toDataURL()]
    const newIndex = newHistory.length - 1

    // Limit history to 50 states to prevent memory issues
    if (newHistory.length > 50) {
      newHistory.shift()
    }

    setHistory(newHistory)
    setHistoryIndex(newIndex)
    onHistoryChange(newHistory, newIndex)
  }

  // Restore canvas state from history
  const restoreFromHistory = (index) => {
    if (index < 0 || index >= history.length) return

    const canvas = canvasRef.current
    const ctx = contextRef.current
    if (!canvas || !ctx) return

    const img = new Image()
    img.src = history[index]
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    setHistoryIndex(index)
    onHistoryChange(history, index)
  }

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    undo: () => {
      if (historyIndex > 0) {
        restoreFromHistory(historyIndex - 1)
      }
    },
    redo: () => {
      if (historyIndex < history.length - 1) {
        restoreFromHistory(historyIndex + 1)
      }
    },
    clear: () => {
      const canvas = canvasRef.current
      const ctx = contextRef.current
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      saveToHistory()
    },
    save: () => {
      return canvasRef.current.toDataURL("image/png")
    },
    export: (format = "png", quality = 0.92) => {
      const canvas = canvasRef.current
      if (!canvas) return null

      switch (format.toLowerCase()) {
        case "jpg":
        case "jpeg":
          return canvas.toDataURL("image/jpeg", quality)
        case "webp":
          return canvas.toDataURL("image/webp", quality)
        case "png":
        default:
          return canvas.toDataURL("image/png")
      }
    },
  }))

  // Drawing event handlers
  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoordinates(e)

    if (tool === "text") {
      // Handle text tool
      const text = prompt("Enter text:")
      if (text && contextRef.current) {
        contextRef.current.font = `${brushSize * 2}px sans-serif`
        contextRef.current.fillStyle = color
        contextRef.current.fillText(text, offsetX, offsetY)
        saveToHistory()
      }
      return
    }

    if (tool === "square" || tool === "circle") {
      // These tools are handled in mouseup event
      setIsDrawing(true)
      contextRef.current.beginPath()
      contextRef.current.moveTo(offsetX, offsetY)
      return
    }

    // For brush and eraser
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const draw = (e) => {
    if (!isDrawing) return

    const { offsetX, offsetY } = getCoordinates(e)

    if (tool === "square" || tool === "circle") {
      // Preview is handled separately
      return
    }

    // For brush and eraser
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const stopDrawing = (e) => {
    if (!isDrawing) return

    const { offsetX, offsetY } = getCoordinates(e)

    if (tool === "square") {
      // Draw rectangle from start point to current point
      const startX = contextRef.current.moveTo.arguments[0]
      const startY = contextRef.current.moveTo.arguments[1]
      const width = offsetX - startX
      const height = offsetY - startY

      contextRef.current.strokeRect(startX, startY, width, height)
    } else if (tool === "circle") {
      // Draw ellipse from start point to current point
      const startX = contextRef.current.moveTo.arguments[0]
      const startY = contextRef.current.moveTo.arguments[1]
      const radiusX = Math.abs(offsetX - startX) / 2
      const radiusY = Math.abs(offsetY - startY) / 2
      const centerX = startX + (offsetX - startX) / 2
      const centerY = startY + (offsetY - startY) / 2

      contextRef.current.beginPath()
      contextRef.current.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI)
      contextRef.current.stroke()
    } else {
      // For brush and eraser
      contextRef.current.closePath()
    }

    setIsDrawing(false)
    saveToHistory()
  }

  // Helper function to get coordinates for both mouse and touch events
  const getCoordinates = (e) => {
    let offsetX, offsetY

    if (e.type.includes("touch")) {
      const rect = canvasRef.current.getBoundingClientRect()
      const touch = e.touches[0] || e.changedTouches[0]
      offsetX = touch.clientX - rect.left
      offsetY = touch.clientY - rect.top
    } else {
      offsetX = e.nativeEvent.offsetX
      offsetY = e.nativeEvent.offsetY
    }

    return { offsetX, offsetY }
  }

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full cursor-${tool === "text" ? "text" : "crosshair"}`}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
    />
  )
})

