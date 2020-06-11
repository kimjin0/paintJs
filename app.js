const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPaintng() {
    painting = false;
}

function onMouseMove(event) {
    console.log(event);
}

function onMuseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPaintng();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMuseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPaintng);
}
