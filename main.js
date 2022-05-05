img = "";
Status = "";
objects = [];

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
objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);
    
   if(Status != ""){
        for(v = 0; v< objects.length; v++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#0ca886");
            percent = floor(objects[v].confidence * 100);
            text(objects[v].label + " " + percent + "%", objects[v].x + 15, objects[v].y + 15);
            noFill();
            stroke("#0ca886");
            rect(objects[v].x, objects[v].y, objects[v].width, objects[v].height);
            
        }

   }
}
