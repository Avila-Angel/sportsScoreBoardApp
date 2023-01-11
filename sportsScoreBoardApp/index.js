let homeScoreNum = document.getElementById("homeScore");
let guestScoreNum = document.getElementById('guestScore');

let scoreH = 0;
let scoreG = 0;

function addOneH() {
    scoreH += 1
    homeScoreNum.innerText = scoreH;
}

function addTwoH() {
    scoreH += 2
    homeScoreNum.innerText = scoreH;
}

function addThreeH() {
    scoreH += 3
    homeScoreNum.innerText = scoreH;
}

function addOneG() {
    scoreG += 1
    guestScoreNum.innerText = scoreG;
}

function addTwoG() {
    scoreG += 2
    guestScoreNum.innerText = scoreG;
}

function addThreeG() {
    scoreG += 3
    guestScoreNum.innerText = scoreG;
}

