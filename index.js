let countEr1 = document.getElementById("counter1")
let countEr2 = document.getElementById("counter2")

// let top1Btn = document.getElementById("top1Btn")
// let top2Btn = document.getElementById("top2Btn")
// let top3Btn = document.getElementById("top3Btn")



//Home Count functions
let homeCount = 0

function count1Num(){
    homeCount = homeCount + 1
    countEr1.textContent = homeCount
}

function count2Num(){
    homeCount = homeCount + 2
    countEr1.textContent = homeCount
}

function count3Num(){
    homeCount = homeCount + 3
    countEr1.textContent = homeCount
}

//Guest Count functions
let guestCount = 0
function countG1num(){
    guestCount = guestCount + 1
    countEr2.textContent = guestCount
}

function countG2num(){
    guestCount = guestCount + 2
    countEr2.textContent = guestCount
}

function countG3num(){
    guestCount = guestCount + 3
    countEr2.textContent = guestCount
}



