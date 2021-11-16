const Engine = Matter.Engine; //carga la biblioteca para el motor fisico
const World= Matter.World; //carga la biblioteca para el mundo
const Bodies = Matter.Bodies; //carga la biblioteca para los cuerpos
const Constraint = Matter.Constraint; //carga la biblioteca para los cuerpos restringidos

var engine, world;
var BackgroundBeta
var Slasher;
var KillerEnemy
var Stab

function preload(){

BackgroundBeta=loadImage("BetaBackground.jpg");

}

function setup(){
    var canvas = createCanvas(2400,800);
    engine = Engine.create(); //creamos el motor fisico
    world = engine.world; //agregamos el mundo a ese motor fisico

    ground = new Ground(1200,height,2600,100);
    
    Slasher = new StabKiller(200,200,230,270);
        
    KillerEnemy = new Enemy(900,200,230,270);

    Stab = new Kill(200,200,230,270);
}
function draw(){
    background(BackgroundBeta);
    ground.display();
    Slasher.display();
    KillerEnemy.display();

    Engine.update(engine); //hace que el motor se actualize    
}

function keyPressed(){

    if(keyCode === 87 && Slasher.body.position.y === height){
        Slasher.Jump(Slasher.body)
    } 
    
    else if(keyCode === 87){
        Slasher.Jump(Slasher.body)
    }
  
  if(keyCode === 68 && Slasher.body.position.y === 800){
 
    Slasher.Moveset(Slasher.body)}
   
 else if(keyCode === 68){
    Slasher.Moveset(Slasher.body)}

  if(keyCode === 65 && Slasher.body.position.y === 800){
 Slasher.Moveset(Slasher.body)
 }

else if(keyCode === 65){Slasher.Moveset2(Slasher.body)}

}

if(keyCode === 88){Stab.display()}

/*function mouseDragged(){

//if(GameState!== "launched"){ 
Matter.Body.setPosition(pajarraco.body,{x: mouseX, y: mouseY}) //hace mover al pajaro en la resortera con el mouse
//}

}

function mouseReleased(){

slingShot1.fly(); //hace que el pajaro vuele al soltar el mouse
GameState="launched";

}

async function getTime(){

var Response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo"); //hace que el fondo cambie gracias a los apis
var ResponseJSON=await Response.json();
console.log("zona horaria.json", ResponseJSON);
var datetime=ResponseJSON.datetime;
var Hour=datetime.slice(11,13);
console.log("fecha", datetime);
console.log("hora", Hour);
if(Hour>=09 && Hour<=19){
BG="sprites/bg.png"
}
else{
BG="sprites/bg2.jpg"    
}
BackgroundIMG=loadImage(BG);
console.log("ecenario AB", BackgroundIMG);
} */ 
