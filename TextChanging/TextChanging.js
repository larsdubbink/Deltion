let text = document.getElementById("Text");
let bool = true

function changeText() {
    if (bool == true) {
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At labore, vero perferendis officiis ipsum ex culpa, voluptate porro quos explicabo facere sed error magnam velit quod harum modi excepturi nihil.";
    } else {
        text.innerHTML = "Hello world!"
    };
    bool = !bool
    console.log("Tekst is veranderd");
}

function changeText2() {
    let localText = prompt("Voer hier uw tekst in", "Hello world!")
    text.innerHTML = localText
    bool = false
}