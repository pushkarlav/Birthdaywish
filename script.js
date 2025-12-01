let currentMessageIndex = 1
const totalMessages = 4

function showCakeScreen() {
  const welcomeScreen = document.getElementById("welcome-screen")
  const cakeScreen = document.getElementById("cake-screen")

  welcomeScreen.style.opacity = "0"
  setTimeout(() => {
    welcomeScreen.classList.remove("active")
    cakeScreen.classList.add("active")
    createConfetti()
  }, 500)
}

function createConfetti() {
  const container = document.querySelector(".confetti-container")
  const colors = ["#ff6b9d", "#c44569", "#f8b500", "#feca57", "#48dbfb", "#0abde3"]

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div")
    confetti.style.position = "absolute"
    confetti.style.width = "10px"
    confetti.style.height = "10px"
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.left = Math.random() * 100 + "%"
    confetti.style.top = "-10px"
    confetti.style.opacity = Math.random()
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`
    confetti.style.animation = `fall ${2 + Math.random() * 3}s linear infinite`
    confetti.style.animationDelay = Math.random() * 2 + "s"
    container.appendChild(confetti)
  }

  const style = document.createElement("style")
  style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(${360 + Math.random() * 360}deg);
                opacity: 0;
            }
        }
    `
  document.head.appendChild(style)
}

function cutCake() {
  const cake = document.getElementById("birthday-cake")
  const cutBtn = document.getElementById("cut-cake-btn")

  cake.classList.add("blown-out")
  cutBtn.disabled = true
  cutBtn.style.opacity = "0.5"

  setTimeout(() => {
    cake.classList.add("cut")
  }, 500)

  setTimeout(() => {
    showBalloonsScreen()
  }, 1500)
}

function showBalloonsScreen() {
  const cakeScreen = document.getElementById("cake-screen")
  const balloonsScreen = document.getElementById("balloons-screen")

  cakeScreen.style.opacity = "0"
  setTimeout(() => {
    cakeScreen.classList.remove("active")
    balloonsScreen.classList.add("active")
    createBalloons()
  }, 500)

  setTimeout(() => {
    showMessagesScreen()
  }, 4000)
}

function createBalloons() {
  const container = document.getElementById("balloons-container")
  const colors = ["#ff6b9d", "#c44569", "#f8b500", "#feca57", "#48dbfb", "#0abde3", "#ff9ff3", "#54a0ff"]

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div")
    balloon.className = "balloon"
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    balloon.style.left = Math.random() * 90 + "%"
    balloon.style.animationDelay = Math.random() * 2 + "s"
    balloon.style.animationDuration = 3 + Math.random() * 2 + "s"
    container.appendChild(balloon)
  }
}

function showMessagesScreen() {
  const balloonsScreen = document.getElementById("balloons-screen")
  const messagesScreen = document.getElementById("messages-screen")

  balloonsScreen.style.opacity = "0"
  setTimeout(() => {
    balloonsScreen.classList.remove("active")
    messagesScreen.classList.add("active")
    updateNavigationButtons()
  }, 500)
}

function nextMessage() {
  if (currentMessageIndex < totalMessages) {
    const currentCard = document.querySelector(`.message-card[data-message="${currentMessageIndex}"]`)
    currentCard.classList.add("exit-left")

    setTimeout(() => {
      currentCard.classList.remove("active", "exit-left")
      currentMessageIndex++
      const nextCard = document.querySelector(`.message-card[data-message="${currentMessageIndex}"]`)
      nextCard.classList.add("active")
      updateNavigationButtons()
    }, 500)
  }
}

function previousMessage() {
  if (currentMessageIndex > 1) {
    const currentCard = document.querySelector(`.message-card[data-message="${currentMessageIndex}"]`)
    currentCard.classList.add("exit-right")

    setTimeout(() => {
      currentCard.classList.remove("active", "exit-right")
      currentMessageIndex--
      const prevCard = document.querySelector(`.message-card[data-message="${currentMessageIndex}"]`)
      prevCard.classList.add("active")
      updateNavigationButtons()
    }, 500)
  }
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const currentMessageSpan = document.getElementById("current-message")

  currentMessageSpan.textContent = currentMessageIndex

  prevBtn.disabled = currentMessageIndex === 1
  nextBtn.disabled = currentMessageIndex === totalMessages
}

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (document.getElementById("messages-screen").classList.contains("active")) {
    if (e.key === "ArrowRight" && currentMessageIndex < totalMessages) {
      nextMessage()
    } else if (e.key === "ArrowLeft" && currentMessageIndex > 1) {
      previousMessage()
    }
  }
})
