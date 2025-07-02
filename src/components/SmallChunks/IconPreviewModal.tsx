"use client"

import { useState } from "react"
import { X, Copy, Check } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import type { IconData } from "@/lib/icons"

// Fallback Button component
const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} />
);

// Fallback IconData type
 type IconData = {
   name: string;
   component: React.ComponentType<any>;
 };

interface IconPreviewModalProps {
  icon: IconData | null
  isOpen: boolean
  onClose: () => void
}

export function IconPreviewModal({ icon, isOpen, onClose }: IconPreviewModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null)

  if (!isOpen || !icon) return null

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType(type)
      setTimeout(() => setCopiedType(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const svgCode = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">
  <!-- ${icon.name} icon paths would go here -->
</svg>`

  const reactCode = `import { ${icon.name} } from 'lucide-react'

<${icon.name} className=\"w-6 h-6\" />`

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{icon.name}</h3>
          <Button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex justify-center mb-8">
          <div className="p-8 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <icon.component className="w-16 h-16 text-gray-700 dark:text-gray-300" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">SVG Code</label>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-xs overflow-x-auto">
                <code>{svgCode}</code>
              </pre>
              <Button
                type="button"
                className="absolute top-2 right-2 bg-transparent"
                onClick={() => copyToClipboard(svgCode, "svg")}
              >
                {copiedType === "svg" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">React Code</label>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-xs overflow-x-auto">
                <code>{reactCode}</code>
              </pre>
              <Button
                type="button"
                className="absolute top-2 right-2 bg-transparent"
                onClick={() => copyToClipboard(reactCode, "react")}
              >
                {copiedType === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
