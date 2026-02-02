let dialogShowing = false

let audio = new Audio("Meow.wav")

let usernameBox = document.getElementById("usernameBox")
let passwordBox = document.getElementById("passwordBox")

let users = {
    Lars: { password: "123", age: "16", fullName: "Lars Dubbink" },
};

let dialogDiv = document.getElementById("dialog")
let sideBar = document.getElementById("sideBar")
let mainScreen = document.getElementById("mainScreen")
let loggedInScreen = document.getElementById("loggedInScreen")
let nameTag = document.getElementById("nameTag")

function openDialog() {
    console.log("trying to open dialog")
    if (dialogShowing == false) {
        dialogDiv.style.top = "50%";
    } else {
        dialogDiv.style.top = "-200px";
    };
    console.log("done")
    dialogShowing = !dialogShowing
};

function logIn() {
    let username = usernameBox.value.trim();
    let password = passwordBox.value.trim(); // trim added

    if (username in users) {
        if (users[username].password === password) { // strict comparison
            console.log("Login successful");
            dialogDiv.style.display = "none";
            mainScreen.style.display = "none"
            sideBar.innerHTML = "";
            mainScreen.style.display = "hidden";
            loggedInScreen.style.display = "flex"
            nameTag.innerHTML = "Hallo, " + users[username].fullName
        } else {
            console.log("Wrong password");
        }
    } else {
        console.log("User not found");
    }
}

function playSound() {
    audio.play()
}