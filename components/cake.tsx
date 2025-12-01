"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CakeProps {
  onCakeCut: () => void
}

export function Cake({ onCakeCut }: CakeProps) {
  const [isCut, setIsCut] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleCutCake = () => {
    setIsCut(true)
    setShowConfetti(true)
    setTimeout(() => {
      onCakeCut()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff00ff", "#00ffff"][
                    Math.floor(Math.random() * 5)
                  ],
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Cake */}
      <div className="relative z-10 text-center animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 drop-shadow-lg animate-bounce-slow">
          Make a Wish! 🌟
        </h2>

        <div className={`relative transition-all duration-700 ${isCut ? "scale-110 rotate-6" : "scale-100"}`}>
          {/* Candles with flames */}
          <div className="flex justify-center gap-8 mb-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative">
                {!isCut && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-flicker">
                    <div className="w-6 h-8 bg-gradient-to-t from-yellow-500 via-orange-400 to-transparent rounded-full" />
                  </div>
                )}
                <div className="w-2 h-10 bg-gradient-to-b from-red-500 to-pink-600 rounded-sm" />
              </div>
            ))}
          </div>

          {/* Cake layers */}
          <div className="relative">
            {/* Top layer */}
            <div className="w-64 h-24 bg-gradient-to-r from-pink-400 to-pink-500 rounded-t-3xl border-4 border-pink-600 shadow-2xl mb-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl animate-spin-slow">🎂</div>
              </div>
            </div>

            {/* Middle layer */}
            <div className="w-72 h-24 bg-gradient-to-r from-purple-400 to-purple-500 border-4 border-purple-600 shadow-2xl mb-2">
              <div className="flex items-center justify-around px-8 h-full">
                <span className="text-3xl">🎀</span>
                <span className="text-3xl">💝</span>
                <span className="text-3xl">🎀</span>
              </div>
            </div>

            {/* Bottom layer */}
            <div className="w-80 h-28 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-b-3xl border-4 border-yellow-600 shadow-2xl">
              <div className="flex items-center justify-around px-12 h-full">
                <span className="text-3xl">🌸</span>
                <span className="text-3xl">🌺</span>
                <span className="text-3xl">🌸</span>
              </div>
            </div>
          </div>
        </div>

        {!isCut && (
          <Button
            onClick={handleCutCake}
            size="lg"
            className="mt-12 text-2xl px-12 py-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 hover:scale-110 transition-all duration-300 rounded-full shadow-2xl animate-pulse-slow font-bold"
          >
            Cut the Cake! 🔪
          </Button>
        )}

        {isCut && <p className="mt-12 text-3xl font-bold text-white animate-bounce">Yay! 🎉🎊</p>}
      </div>
    </div>
  )
}
