var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var particle;
var turn  = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine); 
  setPointsForDiv();
  addScore();

  if(gameState === "end")
  {
    push()
    textSize(50)
    fill("red")
    text("GAME OVER", width/2 -40, height/2)
    pop();
  }
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
    // if(frameCount%60===0){
    //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //  score++;
    // }
 
  // for (var j = 0; j < particles.length; j++) {
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function setPointsForDiv()
{
  text("500", 25, 520)
  text("500", 105, 520)
  text("500", 185, 520)
  text("500", 265, 520)
  text("200", 345, 520)
  text("200", 425, 520)
  text("200", 505, 520)
  text("100", 585, 520)
  text("100", 665, 520)
  text("100", 745, 520)

}

function mousePressed()
{
  if(gameState !== "end")
  {
    turn++  
    particle = new Particle(mouseX, 10, 10, 10)
    particles.push(particle)
  }

  if(turn === 5)
  {
    gameState  = "end"
    //console.log("Gameover")
  }
}

function  addScore()
{
  if(particle!= null)
  {
    particle.display();
     
     if(particle.body.position.y > 520)
     {

       if(particle.body.position.x > 0 && particle.body.position.x < 80)
       {
         score = score + 500;
         particle = null;
         
       }
      else if(particle.body.position.x > 80 && particle.body.position.x < 160 )
       {
         score = score + 500;
         particle = null;
         
       }

       else if(particle.body.position.x > 160 && particle.body.position.x < 240 )
       {
         score = score + 500;
         particle = null;
         
       }

       else if(particle.body.position.x > 240 && particle.body.position.x < 320 )
       {
         score = score + 500;
         particle = null;
         
       }

       else if(particle.body.position.x > 320 && particle.body.position.x < 400 )
       {
         score = score + 200;
         particle = null;
         
       }

       else if(particle.body.position.x > 400 && particle.body.position.x < 480 )
       {
         score = score + 200;
         particle = null;
         
       }
        
       else if(particle.body.position.x > 480 && particle.body.position.x < 560 )
       {
         score = score + 200;
         particle = null;
         
       }

       else if(particle.body.position.x > 560 && particle.body.position.x < 640 )
       {
         score = score + 100;
         particle = null;
         
       }

       else if(particle.body.position.x > 640 && particle.body.position.x < 720 )
       {
         score = score + 100;
         particle = null;
         
       }

       else if(particle.body.position.x > 720 && particle.body.position.x < 800 )
       {
         score = score + 100;
         particle = null;
         
       }
     }
  }
}