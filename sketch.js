var cat,cat1img,cat2img,cat3img;
var mouse,mouse1img,mouse2img,mouse3img;
var bgimg;

function preload() {
    //load the images here
    cat1img = loadAnimation("images/cat1.png");
    cat2img = loadAnimation("images/cat2.png","images/cat3.png");
    cat3img = loadAnimation("images/cat4.png");

    mouse1img = loadAnimation("images/mouse1.png");
    mouse2img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3img = loadAnimation("images/mouse4.png")

    bgimg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(870,600);
 cat.addAnimation("sleeping",cat1img);
 cat.scale = 0.2;
 
 mouse = createSprite(200,600);
 mouse.addAnimation("staing",mouse1img);
 mouse.scale = 0.15;
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catimg",cat3img);
    cat.changeAnimation("catimg");
    cat.scale = 0.2;
    cat.x = 300;

    mouse.addAnimation("mouseimg",mouse3img);
    mouse.changeAnimation("mouseimg");
    mouse.scale = 0.15;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       cat.velocityX = -5;
       cat.addAnimation("running",cat2img);
       cat.changeAnimation("running");

       mouse.addAnimation("teasing",mouse2img);
       mouse.changeAnimation("teasing");

   


}
}