let arr = ["green", "red", "brown", "blue", "yellow"]
let a = document.querySelector(".bn");
let b = document.getElementById("man");
let c = document.getElementById("god");
let d = document.getElementsByTagName("h1");
a.addEventListener("click", function() {


    let van = samco()
    b.textContent = arr[van]

    c.style.backgroundColor = arr[van]


})

function samco() {
    return Math.floor(Math.random() * arr.length);
}