Status="";
function setup() {
    canvas=createCanvas(480,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,400);
    video.hide();

}

function start() {
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("Input").value;
}


function modelLoaded() {
    console.log("Model Loaded!!!");
    Status=true;
}

function draw() {
    image(video,0,0,480,400);
}