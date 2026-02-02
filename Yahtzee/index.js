let imgsArray = 
[
    "imgs/1c.gif", 
    "imgs/2c.gif",
    "imgs/3c.gif",
    "imgs/4c.gif",
    "imgs/5c.gif",
    "imgs/6c.gif"
]

let Dices = document.getElementsByClassName("imgTags")
let checkboxes = document.getElementsByClassName("checkboxes")

arrayLength = Dices.length

function generate(imgBox) {
    let newNumber = Math.random() * 5 + 1
    let number = Math.round(newNumber)
    let arrayNumber = number - 1
    
    imgBox.src = imgsArray[arrayNumber]
}

function generationFunc() {
    console.log("Generation Function started!")
    for (let i = 0; i < arrayLength; i++) {
        console.log("for loop started")

        let currentDice = Dices[i].id
        let currenctCheckbox = checkboxes[i].id

        let DiceElement = document.getElementById(currentDice)
        let checkboxElement = document.getElementById(currenctCheckbox)

        if (!checkboxElement.checked) {
            generate(DiceElement)
        }
    }
}
