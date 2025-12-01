"use client"

export function Balloons() {
  const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff00ff", "#00ffff", "#ff1493", "#ffa500", "#7fff00"]

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-up"
          style={{
            // Prevent balloons from appearing over the image
            left: (() => {
              let leftPos = Math.random() * 100;

              // The image is in the center (30%–70%). Avoid this region.
              if (leftPos > 30 && leftPos < 70) {
                // If balloon falls inside forbidden zone, push it out
                if (leftPos < 50) {
                  leftPos = Math.random() * 30;           // left side (0–30)
                } else {
                  leftPos = 70 + Math.random() * 30;      // right side (70–100)
                }
              }

              return `${leftPos}%`;
            })(),
            bottom: "-10%",
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <div
              className="w-16 h-20 rounded-full shadow-lg"
              style={{
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              }}
            />
            {/* String */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gray-600" />
          </div>
        </div>
      ))}
    </div>
  )
}
