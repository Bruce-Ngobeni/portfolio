const button = document.getElementsByTagName("button")[0];
console.log(button)
const aside = document.getElementsByClassName("left-right-sections")[0];
console.log(aside)
button.addEventListener("click", () => {
    // button.classList.add("clicked")
    console.log("button has been clicked!!!!")
    button.classList.toggle("show")
    button.style.backgroundColor = "red";
    aside.style.display = "block";
})