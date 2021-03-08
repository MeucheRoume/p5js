// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Download_Image: () => save(),
}
gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------
let pos = 0;
let div;
let div2;
function draw() {
    fill('black');
    div=line(200, 200, 400, 400);
    translate(pos, 0, 0);
    div2=line(200, 200, 400, 400);
    while(pos!=0){
        div.hide();
    }
}
function mouseWheel(event) {
    print(event.delta);
    pos = event.delta;
}
// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}