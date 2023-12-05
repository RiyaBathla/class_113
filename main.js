function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(250, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(img, 200, 0, 140, 100);
    circle(50, 50, 70);
    rect(200, 200, 50, 20);
    circle(50, 50, 70);
    rect(200, 200, 50, 20);
    circle(50, 50, 70);
    rect(200, 200, 50, 20);
    circle(50, 50, 70);
    rect(200, 200, 50, 20);
}


