let homeScore = 0
let awayScore = 0

let homeDisplay = document.getElementById("home-team")

let awayDisplay = document.getElementById("away-team")

function increaseBy1Home() {
    homeScore += 1
    homeDisplay.textContent = homeScore
}

function increaseBy1Away() {
    awayScore += 1
    awayDisplay.textContent = awayScore
}

function increaseBy2Home() {
    homeScore += 2
    homeDisplay.textContent = homeScore
}

function increaseBy2Away() {
    awayScore += 2
    awayDisplay.textContent = awayScore
}

function increaseBy3Home() {
    homeScore += 3
    homeDisplay.textContent = homeScore
}

function increaseBy3Away() {
    awayScore += 3
    awayDisplay.textContent = awayScore
}