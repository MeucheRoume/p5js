// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Download_Image: () => save(),
}
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------
let pos = 0;
function draw() {
    fill('white');
    rect(0, 0, width, height);
    fill('black');
    // Version avec traits aléatoires:
    // for(let i=0; i<5; i++){
    //     push();
    //         randomSeed(i);
    //         strokeWeight(5);
    //         translate(pos/2, 0, 0);
    //         line(random(0, width), random(0, height/2), random(0, width), random(0, height/2));
    //     pop();
    // }
    // for(let i=0; i<5; i++){
    //     push();
    //         randomSeed(i);
    //         strokeWeight(5);
    //         translate(pos/2, 0, 0);
    //         line(width-random(0, width), height/2+(height-random(height/2, height)), width-random(0, width), height/2+(height-random(height/2, height)))
    //     pop();
    // }
    push();
        strokeWeight(5);
        let r = random(5);
        translate(pos/r, 0, 0);
        // première partie
        line(0, 0, 5*width/6, height/5);
        line(width/4, 0, width/5, height/2);
        line(5*width/6, height/5, width, height/8);
        line(5*width/6, height/5, 4*width/5, height/2);
        line(5*width/6, 0, width, height/16);
        // deuxième partie
        line(width/4, height/2, width/5, 3*height/4);
        line(width/5, 3*height/4, 0, 13*height/16);
        line(width/5, 3*height/4, 5*width/6, height);
        line(3*width/4, height/2, 3*width/5, height);
        line(0, 19*height/20, width/10, height);
        pos=0;
    pop();
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