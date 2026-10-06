// Display current date 
let today = new Date();

document.getElementById("dateDisplay").innerHTML = 
"today's date is:" + today.toDateString;

// Change background colour
function changeBackgroundColour() {
let colors = ["lightblue, lightgreen, lightyellow, lavender, red"];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundColor = randomColor;
}