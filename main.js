function preload(){

}

function setup(){
    canvas = createCanvas(640 , 480);
    canvas.position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video, 230, 150, 230, 200);
fill(255, 199, 203);
stroke(0, 0, 0);
rect(50, 25, 500, 55);
rect(25, 50, 55, 500);
rect(550, 50, 55, 500);
rect(50, 440, 500,55);
fill(255, 238, 161);
stroke(0, 0, 0);
circle(50, 50, 75);
circle(50, 450, 75);
circle(575, 50, 75);
circle(575, 450, 75);
}
