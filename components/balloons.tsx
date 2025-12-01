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
            left: `${Math.random() * 100}%`,
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
