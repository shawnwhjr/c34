//Create variables here
var dog
var happydog,saddog,foods

function preload()
{
	happydog=loadImage("images/dogImg.png")
  saddog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  db=firebase.database()
  dog=createSprite(400,300)
  dog.addImage(happydog)
  dog.scale=0.4
  db.ref('food').on("value",(data)=>{ foods= data.val(); });

  
}


function draw() {  

 
  //add styles here
  background("green")
  if(keyWentDown(UP_ARROW)){ writeStock(foods);
     dog.addImage(happydog); 
  }
     if(keyWentUp(UP_ARROW)){ 
       dog.addImage(saddog);
     } drawSprites();
      //add styles here 
      textSize(20);

      fill("white");
       text("Note: Press 'UP' Arrow Key To feed milk to Drago",width/2-200,50);
        text("Food Remaining="+foods,width/2+50,height/2-50);


}

function writeStock(x){ 
  if(x<=0){
     x=0;
 } 
 else{ 
   x=x-1; } 
   db.ref('/').update({ food:x }) }


