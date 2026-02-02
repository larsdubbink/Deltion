let imgBox = document.getElementById("imgTag")
let numberBox = document.getElementById("numberH2")

let imgsArray = 
[
    "imgs/1c.gif", 
    "imgs/2c.gif",
    "imgs/3c.gif",
    "imgs/4c.gif",
    "imgs/5c.gif",
    "imgs/6c.gif"
]

function generate() {
    let newNumber = Math.random() * 5 + 1
    let number = Math.round(newNumber)
    let arrayNumber = number - 1
    
    imgBox.src = imgsArray[arrayNumber]
    numberBox.innerHTML = number
}