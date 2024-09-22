math1 = document.getElementById("math1")
math2 = document.getElementById("math2")
math3 = document.getElementById("math3")

math1.style.display = 'none'
math2.style.display = 'none'
math3.style.display = 'none'


math1Content = document.getElementById("math1-content")
math2Content = document.getElementById("math2-content")
math3Content = document.getElementById("math3-content")


math1Content.addEventListener("click", () => {
    if (math1.style.display === 'none') {
        math1.style.display = 'block'
    }
    else {
        math1.style.display = 'none'
    }
})
math2Content.addEventListener("click", () => {
    if (math2.style.display === 'none') {
        math2.style.display = 'block'
    }
    else {
        math2.style.display = 'none'
    }
})
math3Content.addEventListener("click", () => {
    if (math3.style.display === 'none') {
        math3.style.display = 'block'
    }
    else {
        math3.style.display = 'none'
    }
})
let date = new Date()
let monthsLeft = 11 - date.getMonth()
let daysLeft = 31 - date.getDay()
let secondsLeft = monthsLeft * 31 * 24 * 3600 + daysLeft * 3600

let secondsField = document.getElementById("time-container")
const updateTimer = () => {
    if (secondsLeft > 0) {
        secondsLeft--
        secondsField.innerHTML = secondsLeft.toString()
    }
    else{
        secondsField.innerHTML = "The countdown is over! Hopefully I accomplished all of my goals and I'm ready for other challenges."
    }
 }

setInterval(updateTimer, 1000)
