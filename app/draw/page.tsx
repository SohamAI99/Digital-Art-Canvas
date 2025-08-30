"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  ArrowLeft,
  Brush,
  Circle,
  Download,
  Eraser,
  Home,
  Minus,
  Plus,
  Redo,
  Save,
  Settings,
  Square,
  Trash2,
  Type,
  Undo,
} from "lucide-react"
import { DrawingCanvas } from "@/components/drawing-canvas"
import { ColorPicker } from "@/components/color-picker"
import { useMobile } from "@/hooks/use-mobile"

export default function DrawPage() {
  const [tool, setTool] = useState("brush")
  const [color, setColor] = useState("#000000")
  const [brushSize, setBrushSize] = useState(5)
  const [opacity, setOpacity] = useState(100)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [showToolbar, setShowToolbar] = useState(true)
  const canvasRef = useRef(null)
  const isMobile = useMobile()
  const { theme } = useTheme()

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      // Canvas undo logic would be implemented here
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      // Canvas redo logic would be implemented here
    }
  }

  const handleClearCanvas = () => {
    if (canvasRef.current) {
      // Clear canvas logic would be implemented here
      setHistory([])
      setHistoryIndex(-1)
    }
  }

  const handleSaveCanvas = () => {
    if (canvasRef.current) {
      // Save canvas logic would be implemented here
      alert("Your artwork has been saved!")
    }
  }

  const handleExportCanvas = () => {
    if (canvasRef.current) {
      const link = document.createElement("a")
      link.download = `canvas-artwork-${Date.now()}.png`
      // Export canvas logic would be implemented here
      link.click()
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="border-b border-border p-2 bg-background">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/">
                    <Button variant="ghost" size="icon">
                      <Home className="h-5 w-5" />
                      <span className="sr-only">Home</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Home</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h1 className="text-lg font-semibold hidden md:block">Canvas</h1>
          </div>

          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleSaveCanvas}>
                    <Save className="h-5 w-5" />
                    <span className="sr-only">Save</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleExportCanvas}>
                    <Download className="h-5 w-5" />
                    <span className="sr-only">Export</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Export</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/settings">
                    <Button variant="ghost" size="icon">
                      <Settings className="h-5 w-5" />
                      <span className="sr-only">Settings</span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Toolbar */}
        <div
          className={`${showToolbar ? "w-16 md:w-64" : "w-0"} transition-all duration-300 border-r border-border bg-card overflow-hidden`}
        >
          <div className="h-full flex flex-col p-2 md:p-4">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium hidden md:block">Tools</h3>
                <ToggleGroup
                  type="single"
                  value={tool}
                  onValueChange={(value) => value && setTool(value)}
                  className="flex flex-col md:flex-row flex-wrap gap-1"
                >
                  <ToolButton value="brush" icon={<Brush className="h-5 w-5" />} label="Brush" />
                  <ToolButton value="eraser" icon={<Eraser className="h-5 w-5" />} label="Eraser" />
                  <ToolButton value="square" icon={<Square className="h-5 w-5" />} label="Square" />
                  <ToolButton value="circle" icon={<Circle className="h-5 w-5" />} label="Circle" />
                  <ToolButton value="text" icon={<Type className="h-5 w-5" />} label="Text" />
                </ToggleGroup>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium hidden md:block">Color</h3>
                <div className="flex justify-center md:justify-start">
                  <ColorPicker color={color} onChange={setColor} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium hidden md:block">Brush Size</h3>
                  <span className="text-xs text-muted-foreground hidden md:block">{brushSize}px</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setBrushSize(Math.max(1, brushSize - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Slider
                    value={[brushSize]}
                    min={1}
                    max={50}
                    step={1}
                    onValueChange={(value) => setBrushSize(value[0])}
                    className="w-full hidden md:block"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setBrushSize(Math.min(50, brushSize + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium hidden md:block">Opacity</h3>
                  <span className="text-xs text-muted-foreground hidden md:block">{opacity}%</span>
                </div>
                <Slider
                  value={[opacity]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) => setOpacity(value[0])}
                  className="w-full hidden md:block"
                />
              </div>

              <div className="space-y-2 mt-auto">
                <h3 className="text-sm font-medium hidden md:block">Actions</h3>
                <div className="flex flex-col md:flex-row gap-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" onClick={handleUndo} disabled={historyIndex <= 0}>
                          <Undo className="h-5 w-5" />
                          <span className="sr-only">Undo</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Undo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleRedo}
                          disabled={historyIndex >= history.length - 1}
                        >
                          <Redo className="h-5 w-5" />
                          <span className="sr-only">Redo</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Redo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" onClick={handleClearCanvas}>
                          <Trash2 className="h-5 w-5" />
                          <span className="sr-only">Clear Canvas</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Clear Canvas</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative bg-muted overflow-hidden">
          <DrawingCanvas
            ref={canvasRef}
            tool={tool}
            color={color}
            brushSize={brushSize}
            opacity={opacity / 100}
            onHistoryChange={(newHistory, newIndex) => {
              setHistory(newHistory)
              setHistoryIndex(newIndex)
            }}
          />

          {/* Toggle Toolbar Button (Mobile) */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-2 left-2 md:hidden z-10"
            onClick={() => setShowToolbar(!showToolbar)}
          >
            {showToolbar ? <ArrowLeft className="h-5 w-5" /> : <Brush className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

function ToolButton({ value, icon, label }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ToggleGroupItem
            value={value}
            aria-label={label}
            className="h-10 w-10 p-0 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            {icon}
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

