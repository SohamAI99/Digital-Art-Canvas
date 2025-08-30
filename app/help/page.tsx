import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Brush,
  Circle,
  Download,
  Eraser,
  Keyboard,
  Layers,
  MousePointer,
  Save,
  Square,
  Type,
  Undo,
  Redo,
} from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Help & Tutorials</h1>
          </div>
          <Link href="/draw">
            <Button>Start Drawing</Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 py-8 md:py-12">
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="shortcuts">Shortcuts</TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="basics" className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Getting Started</h2>
                <p className="text-muted-foreground">
                  Welcome to Canvas, your digital art studio! This guide will help you get started with the basics of
                  using our drawing application.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MousePointer className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Interface Navigation</h3>
                    </div>
                    <p className="text-muted-foreground">
                      The Canvas interface is divided into two main sections: the toolbar on the left and the drawing
                      canvas on the right. The toolbar contains all your drawing tools, color options, and action
                      buttons.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Brush className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Your First Drawing</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Select the brush tool from the toolbar, choose a color, and start drawing on the canvas. You can
                      adjust the brush size and opacity using the sliders in the toolbar.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Save className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Saving Your Work</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Click the Save button in the top toolbar to save your artwork to your browser's local storage. To
                      export your artwork as an image, click the Export button.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Undo className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Undo & Redo</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Made a mistake? Use the Undo button to revert your last action. Changed your mind? Use the Redo
                      button to restore it.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Video Tutorial</h2>
                <p className="text-muted-foreground">Watch this quick tutorial to learn the basics of using Canvas.</p>
                <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center">
                  <p className="text-muted-foreground">Video tutorial placeholder</p>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="tools" className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Drawing Tools</h2>
                <p className="text-muted-foreground">
                  Canvas offers a variety of tools to help you create your digital artwork. Here's a guide to each tool
                  and how to use it effectively.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Brush className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Brush Tool</h3>
                    </div>
                    <p className="text-muted-foreground">
                      The primary drawing tool. Adjust the size and opacity to create different stroke effects. Perfect
                      for freehand drawing and sketching.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Eraser className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Eraser Tool</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Removes parts of your drawing. Like the brush tool, you can adjust the size to erase larger or
                      smaller areas. Use it to correct mistakes or refine your artwork.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Square className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Square Tool</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Creates perfect squares and rectangles. Click and drag to define the size and shape. Hold Shift
                      while dragging to create a perfect square.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Circle className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Circle Tool</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Creates circles and ellipses. Click and drag to define the size and shape. Hold Shift while
                      dragging to create a perfect circle.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Type className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Text Tool</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Adds text to your artwork. Click on the canvas to place text, then type your message. You can
                      adjust the font, size, and color in the text options panel.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Layers className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Layers</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Organize your artwork with layers. Create new layers for different elements of your drawing to
                      edit them independently. Adjust layer opacity and order for complex compositions.
                    </p>
                  </div>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="shortcuts" className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
                <p className="text-muted-foreground">Speed up your workflow with these helpful keyboard shortcuts.</p>

                <div className="border border-border rounded-lg overflow-hidden mt-6">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">Action</th>
                        <th className="px-4 py-3 text-left font-medium">Shortcut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Brush className="h-4 w-4 text-muted-foreground" />
                          <span>Brush Tool</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">B</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Eraser className="h-4 w-4 text-muted-foreground" />
                          <span>Eraser Tool</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">E</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Square className="h-4 w-4 text-muted-foreground" />
                          <span>Square Tool</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">S</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Circle className="h-4 w-4 text-muted-foreground" />
                          <span>Circle Tool</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">C</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Type className="h-4 w-4 text-muted-foreground" />
                          <span>Text Tool</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">T</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Undo className="h-4 w-4 text-muted-foreground" />
                          <span>Undo</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd>
                          <span className="mx-1">+</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Z</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Redo className="h-4 w-4 text-muted-foreground" />
                          <span>Redo</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd>
                          <span className="mx-1">+</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Y</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Save className="h-4 w-4 text-muted-foreground" />
                          <span>Save</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd>
                          <span className="mx-1">+</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">S</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          <span>Export</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd>
                          <span className="mx-1">+</span>
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">E</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <span>Increase Brush Size</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">]</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 flex items-center gap-2">
                          <span>Decrease Brush Size</span>
                        </td>
                        <td className="px-4 py-3">
                          <kbd className="px-2 py-1 bg-muted rounded text-xs">[</kbd>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Tips & Tricks</h2>
                <p className="text-muted-foreground">
                  Here are some additional tips to help you get the most out of Canvas.
                </p>

                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <Keyboard className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Hold <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Shift</kbd> while drawing with the
                      brush tool to create straight lines.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <Keyboard className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Use the <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Space</kbd> key to temporarily
                      switch to the hand tool for panning the canvas.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <Keyboard className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Double-click on a shape to edit its properties after it's been created.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                      <Keyboard className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Right-click on the canvas to access a context menu with additional options.
                    </p>
                  </li>
                </ul>
              </section>
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

