"use client"

import { useState, useRef, useEffect } from "react"
import { Cake } from "@/components/cake"
import { WelcomeScreen } from "@/components/welcome-screen"
import { MessageCarousel } from "@/components/message-carousel"
import { Balloons } from "@/components/balloons"

export default function BirthdayPage() {
  const [stage, setStage] = useState<"welcome" | "cake" | "messages">("welcome")
  const [showBalloons, setShowBalloons] = useState(false)
  const [audioPlaying, setAudioPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio("/happy-birthday.mp3")
    audio.loop = true
    audio.volume = 0.5
    audio.preload = "auto"
    audioRef.current = audio

    audio.addEventListener("canplaythrough", () => {
      console.log("[v0] Audio loaded successfully")
    })

    audio.addEventListener("play", () => {
      console.log("[v0] Audio started playing")
      setAudioPlaying(true)
    })

    audio.addEventListener("error", (e) => {
      console.error("[v0] Audio error:", e)
      console.error("[v0] Audio error details:", audio.error)
      setAudioPlaying(false)
    })

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  const handleWelcomeComplete = () => {
    setStage("cake")

    if (audioRef.current) {
      console.log("[v0] Attempting to play audio...")
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("[v0] Audio playback started successfully")
            setAudioPlaying(true)
          })
          .catch((error) => {
            console.error("[v0] Audio playback failed:", error)
            // Try again with user interaction
            const playAudio = () => {
              audioRef.current?.play().then(() => {
                setAudioPlaying(true)
                document.removeEventListener("click", playAudio)
              })
            }
            document.addEventListener("click", playAudio, { once: true })
          })
      }
    }
  }

  const handleCakeCut = () => {
    setShowBalloons(true)
    setTimeout(() => {
      setStage("messages")
    }, 3000)
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {stage === "welcome" && <WelcomeScreen onComplete={handleWelcomeComplete} />}

      {stage === "cake" && <Cake onCakeCut={handleCakeCut} />}

      {stage === "messages" && <MessageCarousel />}

      {showBalloons && <Balloons />}

      {audioPlaying && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-50 flex items-center gap-2 animate-pulse">
          <span className="inline-block w-2 h-2 bg-white rounded-full" />
          Music Playing
        </div>
      )}

    </main>
  )
}
