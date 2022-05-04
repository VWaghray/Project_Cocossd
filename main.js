img = "";
Status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult); 
}

function gotResult(error, results){
if (error){
    console.log(error);
}
console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    
    fill("#4663e3");
    text("Dog", 175 , 75);
    noFill();
    stroke("#4663e3");
    rect(150, 60, 200 , 350);

    fill("#4663e3");
    text("Cat", 352 , 100);
    noFill();
    stroke("#4663e3");
    rect(310, 85, 230 , 300);
}