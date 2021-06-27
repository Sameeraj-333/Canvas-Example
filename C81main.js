canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 30, 0, 360);
ctx.stroke();
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("x coordinate is = " + mouse_x + " y coordinate is = " + mouse_y);
    circle(mouse_x, mouse_y);


}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mouse_x, mouse_y, 30, 0, 360);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}