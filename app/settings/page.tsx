"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Moon, Sun, Laptop } from "lucide-react"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [defaultBrushSize, setDefaultBrushSize] = useState(5)
  const [defaultOpacity, setDefaultOpacity] = useState(100)
  const [autosaveEnabled, setAutosaveEnabled] = useState(true)
  const [autosaveInterval, setAutosaveInterval] = useState("5")
  const [gridEnabled, setGridEnabled] = useState(false)
  const [snapToGridEnabled, setSnapToGridEnabled] = useState(false)
  const [highQualityExport, setHighQualityExport] = useState(true)

  const handleResetDefaults = () => {
    setDefaultBrushSize(5)
    setDefaultOpacity(100)
    setAutosaveEnabled(true)
    setAutosaveInterval("5")
    setGridEnabled(false)
    setSnapToGridEnabled(false)
    setHighQualityExport(true)
    setTheme("system")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/draw">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Settings</h1>
          </div>
          <Button variant="outline" onClick={handleResetDefaults}>
            Reset Defaults
          </Button>
        </div>
      </header>

      <main className="container px-4 py-8 md:py-12 max-w-3xl">
        <div className="space-y-10">
          {/* Appearance Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Appearance</h2>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-medium">Theme</h3>
                <p className="text-muted-foreground text-sm mb-4">Choose your preferred theme for the application.</p>
                <div className="grid grid-cols-3 gap-4">
                  <ThemeButton
                    icon={<Sun className="h-5 w-5" />}
                    label="Light"
                    active={theme === "light"}
                    onClick={() => setTheme("light")}
                  />
                  <ThemeButton
                    icon={<Moon className="h-5 w-5" />}
                    label="Dark"
                    active={theme === "dark"}
                    onClick={() => setTheme("dark")}
                  />
                  <ThemeButton
                    icon={<Laptop className="h-5 w-5" />}
                    label="System"
                    active={theme === "system"}
                    onClick={() => setTheme("system")}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Show Grid</h3>
                  <p className="text-muted-foreground text-sm">Display a grid on the canvas for better alignment.</p>
                </div>
                <Switch checked={gridEnabled} onCheckedChange={setGridEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Snap to Grid</h3>
                  <p className="text-muted-foreground text-sm">Automatically align elements to the grid.</p>
                </div>
                <Switch checked={snapToGridEnabled} onCheckedChange={setSnapToGridEnabled} disabled={!gridEnabled} />
              </div>
            </div>
          </section>

          {/* Drawing Settings Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Drawing Settings</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Default Brush Size</h3>
                  <span className="text-sm text-muted-foreground">{defaultBrushSize}px</span>
                </div>
                <Slider
                  value={[defaultBrushSize]}
                  min={1}
                  max={50}
                  step={1}
                  onValueChange={(value) => setDefaultBrushSize(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Default Opacity</h3>
                  <span className="text-sm text-muted-foreground">{defaultOpacity}%</span>
                </div>
                <Slider
                  value={[defaultOpacity]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) => setDefaultOpacity(value[0])}
                />
              </div>
            </div>
          </section>

          {/* Autosave Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Autosave</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Enable Autosave</h3>
                  <p className="text-muted-foreground text-sm">Automatically save your work at regular intervals.</p>
                </div>
                <Switch checked={autosaveEnabled} onCheckedChange={setAutosaveEnabled} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Autosave Interval</h3>
                <p className="text-muted-foreground text-sm mb-2">How often your work should be automatically saved.</p>
                <Select value={autosaveInterval} onValueChange={setAutosaveInterval} disabled={!autosaveEnabled}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select interval" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Every minute</SelectItem>
                    <SelectItem value="5">Every 5 minutes</SelectItem>
                    <SelectItem value="10">Every 10 minutes</SelectItem>
                    <SelectItem value="15">Every 15 minutes</SelectItem>
                    <SelectItem value="30">Every 30 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Export Settings Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Export Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">High Quality Export</h3>
                  <p className="text-muted-foreground text-sm">
                    Export images at the highest quality (larger file size).
                  </p>
                </div>
                <Switch checked={highQualityExport} onCheckedChange={setHighQualityExport} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function ThemeButton({ icon, label, active, onClick }) {
  return (
    <button
      className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
        active ? "border-primary bg-primary/10" : "border-border"
      } hover:border-primary/50 transition-colors`}
      onClick={onClick}
    >
      {icon}
      <span className="mt-2 text-sm">{label}</span>
    </button>
  )
}

