"use client"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ColorPicker({ color, onChange }) {
  const [open, setOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState(color)
  const [recentColors, setRecentColors] = useState([
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FF9900",
    "#9900FF",
  ])

  const handleColorChange = (e) => {
    const newColor = e.target.value
    setCurrentColor(newColor)
  }

  const handleColorSelect = (selectedColor) => {
    setCurrentColor(selectedColor)
    onChange(selectedColor)

    // Add to recent colors if not already there
    if (!recentColors.includes(selectedColor)) {
      setRecentColors([selectedColor, ...recentColors.slice(0, 9)])
    }

    setOpen(false)
  }

  const handleApply = () => {
    onChange(currentColor)

    // Add to recent colors if not already there
    if (!recentColors.includes(currentColor)) {
      setRecentColors([currentColor, ...recentColors.slice(0, 9)])
    }

    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-10 h-10 p-0 rounded-md border-2" style={{ backgroundColor: color }}>
          <span className="sr-only">Pick a color</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3">
        <Tabs defaultValue="picker">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="picker" className="flex-1">
              Picker
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex-1">
              Recent
            </TabsTrigger>
          </TabsList>

          <TabsContent value="picker" className="space-y-4">
            <div className="flex justify-center">
              <input
                type="color"
                value={currentColor}
                onChange={handleColorChange}
                className="w-32 h-32 cursor-pointer border-0 bg-transparent p-0"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Preview</span>
                <span className="text-xs text-muted-foreground">{currentColor}</span>
              </div>
              <div className="h-10 w-full rounded-md border" style={{ backgroundColor: currentColor }} />
            </div>

            <Button className="w-full" onClick={handleApply}>
              Apply
            </Button>
          </TabsContent>

          <TabsContent value="recent">
            <div className="grid grid-cols-5 gap-2">
              {recentColors.map((recentColor, index) => (
                <button
                  key={`${recentColor}-${index}`}
                  className="w-10 h-10 rounded-md border overflow-hidden"
                  style={{ backgroundColor: recentColor }}
                  onClick={() => handleColorSelect(recentColor)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}

