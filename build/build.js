var gui = new dat.GUI();
var params = {
    Ellipse_Size: 30,
    Download_Image: function () { return save(); },
};
gui.add(params, "Ellipse_Size", 0, 100, 1);
gui.add(params, "Download_Image");
var pos = 0;
function draw() {
    fill('white');
    rect(0, 0, width, height);
    fill('black');
    push();
    strokeWeight(5);
    translate(pos / 2, 0, 0);
    line(0, 0, 5 * width / 6, height / 5);
    line(width / 4, 0, width / 5, height / 2);
    line(5 * width / 6, height / 5, width, height / 8);
    line(5 * width / 6, height / 5, 4 * width / 5, height / 2);
    line(5 * width / 6, 0, width, height / 16);
    line(width / 4, height / 2, width / 5, 3 * height / 4);
    line(width / 5, 3 * height / 4, 0, 13 * height / 16);
    line(width / 5, 3 * height / 4, 5 * width / 6, height);
    line(3 * width / 4, height / 2, 3 * width / 5, height);
    line(0, 19 * height / 20, width / 10, height);
    pos = 0;
    pop();
}
function mouseWheel(event) {
    print(event.delta);
    pos = event.delta;
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map