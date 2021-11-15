function preload(){

}

function setup(){
    createCanvas(500 , 400);
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    video.center()
}

function draw(){
    image(video , 40 , 40 , 400 , 300);
    fill(6,6,111)
    circle(40, 40, 70, 70);
    circle(450, 40, 70, 70);
    circle(450, 350, 70, 70);
    circle(40, 350, 70, 70);
    fill(92,184,92)
    rect(70, 25, 350, 20, 5);
    rect(70, 340, 350, 20, 5);
    rect(30, 70, 20, 250, 5);
    rect(440, 70, 20, 250, 5);
}

function take_snapshot(){
    save('myFirstp5JsApp.png');
}