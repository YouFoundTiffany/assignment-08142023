

// Game Data
let home = 0
let away = 0

// Interaction with DOM, alias for document.getElementById
let homeScoreElm = document.getElementById('homeScore')
let awayScoreElm = document.getElementById('awayScore')


// HOME POINTS
// PLUS ONE
function homePointsOne() {
    console.log('home +1')
    home += 1
    // let elem = document.getElementById('homeScore')
    homeScoreElm.innerText = home.toString().padStart(2, '0');
    maxScore()
}
// PLUS THREE
function homePointsThree() {
    console.log('home +3')
    home += 3
    // let elem = document.getElementById('homeScore')
    homeScoreElm.innerText = home.toString().padStart(2, '0');
    maxScore()
}

// AWAY POINTS
// PLUS ONE
function awayPointsOne() {
    console.log('away +1')
    away += 1
    // let elem = document.getElementById('awayScore')
    awayScoreElm.innerText = away.toString().padStart(2, '0');
    maxScore()
}
// PLUS THREE
function awayPointsThree() {
    console.log('away +3')
    away += 3
    // let elem = document.getElementById('awayScore')
    awayScoreElm.innerText = away.toString().padStart(2, '0');
    maxScore()
}

// RESET BUTTON
function reset() {
    console.log("new game")
    home = 0
    away = 0
    // let elem = document.getElementById('homeScore')
    homeScoreElm.innerText = home.toString().padStart(2, '0');
    // let elem = document.getElementById('awa7Score')
    awayScoreElm.innerText = away.toString().padStart(2, '0');
}

// MAX SCORE
function maxScore() {
    if (home >= 20) {
        console.log("home wins")
        alert("Home Wins!")
        reset()
    } else if (away >= 10) {
        console.log("away wins")
        alert("Away Wins!")
        reset()
    }
}

