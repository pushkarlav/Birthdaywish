"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface WelcomeScreenProps {
  onComplete: () => void
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 overflow-hidden">
      {/* Floating stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${(i * 0.1) % 3}s`,
              animationDuration: `${2 + (i * 0.05) % 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full opacity-80" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <div className="animate-bounce-slow mb-8">
          <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-2xl mb-4 animate-gradient-text">
            Welcome
          </h1>
        </div>

        <div className="space-y-4 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-bold text-yellow-300 drop-shadow-lg animate-pulse-slow">
            Priti Labh
          </h2>
          <p className="text-3xl md:text-5xl text-white font-semibold drop-shadow-md">(Bau)</p>
        </div>

        <Button
          onClick={onComplete}
          size="lg"
          className="mt-12 text-2xl px-12 py-8 bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 hover:scale-110 transition-all duration-300 rounded-full shadow-2xl animate-bounce-slow font-bold"
        >
          Let's Celebrate! 🎉
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-600/20 to-transparent" />
    </div>
  )
}
