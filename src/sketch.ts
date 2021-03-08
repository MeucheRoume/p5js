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
function draw() {
    fill('white');
    rect(0, 0, width, height);
    fill('black');
    for(let i=0; i<5; i++){
        push();
        randomSeed(i);
        strokeWeight(5);
        translate(pos/2, 0, 0);
        line(random(0, width), random(0, height/2), random(0, width), random(0, height/2));
        pop();
    }
    for(let i=0; i<5; i++){
        push();
        randomSeed(i);
        strokeWeight(5);
        translate(pos/2, 0, 0);
        line(width-random(0, width), height/2+(height-random(height/2, height)), width-random(0, width), height/2+(height-random(height/2, height)))
        pop();
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