let box = document.getElementById(`box`)
let guess = document.getElementById(`guess`)
let submitButton = document.getElementById(`submitButton`)
let resultParagraph = document.getElementById(`resultParagraph`)
let playAgainButton = document.getElementById(`playAgainButton`)

let colors = [`red`, `green`, `blue`]
let randomNumber
makeBalls()

submitButton.addEventListener(`click`, submit)
playAgainButton.addEventListener(`click`, playAgain)

guess.focus()

function makeBalls() {
  box.innerHTML = ``
  randomNumber = Math.floor(Math.random() * 900) + 100

  for (let i = 0; i < randomNumber; i++) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    let randomLeft = Math.floor(Math.random() * 391)
    let randomTop = Math.floor(Math.random() * 391)

    let ball = document.createElement(`div`)
    ball.classList.add(`ball`)
    ball.style.backgroundColor = randomColor
    ball.style.left = `${randomLeft}px`
    ball.style.top = `${randomTop}px`

    box.appendChild(ball)
  }
}

function submit() {
  let guessValue = guess.value.trim()

  if (guessValue == ``) {
    resultParagraph.innerHTML = `Type a number.`
  } else {
    let diff = Math.abs(randomNumber - guessValue)

    if (diff == 0) {
      resultParagraph.innerHTML = `You got it exactly, nice job!`
    } else {
      resultParagraph.innerHTML = `Count is ${randomNumber}. You were off by ${diff}.`
    }

    guess.disabled = true
    submitButton.disabled = true
    playAgainButton.style.display = `block`
  }
}

function playAgain() {
  guess.value = ``
  guess.disabled = false
  submitButton.disabled = false
  resultParagraph.innerHTML = ``
  playAgainButton.style.display = `none`

  makeBalls()
  guess.focus()
}
