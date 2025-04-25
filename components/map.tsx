"use client"

import { useEffect, useRef } from "react"

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real application, you would use a library like Google Maps, Mapbox, or Leaflet

    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = mapRef.current.clientHeight
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a placeholder map
        ctx.fillStyle = "#e5e7eb"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some roads
        ctx.strokeStyle = "#9ca3af"
        ctx.lineWidth = 2

        // Horizontal roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 5))
          ctx.lineTo(canvas.width, canvas.height * (i / 5))
          ctx.stroke()
        }

        // Vertical roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 5), 0)
          ctx.lineTo(canvas.width * (i / 5), canvas.height)
          ctx.stroke()
        }

        // Draw a marker for the office location
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        // Pin base
        ctx.fillStyle = "#2563eb"
        ctx.beginPath()
        ctx.arc(centerX, centerY, 10, 0, Math.PI * 2)
        ctx.fill()

        // Pin inner circle
        ctx.fillStyle = "#ffffff"
        ctx.beginPath()
        ctx.arc(centerX, centerY, 5, 0, Math.PI * 2)
        ctx.fill()

        // Add "Office Location" text
        ctx.fillStyle = "#1f2937"
        ctx.font = "bold 14px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Office Location", centerX, centerY + 30)
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild)
        }
      }
    }
  }, [])

  return <div ref={mapRef} className="h-full w-full bg-gray-100" aria-label="Map showing our office location"></div>
}
