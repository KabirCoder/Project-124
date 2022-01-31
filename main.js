function preload(){



}

function setup(){

    canvas= createCanvas(500, 408.977);
    canvas.position(560, 164.99);
    
    video= createCapture(VIDEO);
    video.size(481.59, 500)
     
    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses)


}

function modelloaded(){

    console.log ("poseNet model is initialized")
}

function gotPoses(results){

    if (results.length>0) {
        console.log(results);
    }


}

function draw(){

background("#50BFE6");

    
}

