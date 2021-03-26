class Ground {

constructor() {

var options = {isStatic: true}

this.ground = Bodies.rectangle(550,550,8500,20,options)
World.add(world, this.ground)
    
}

display() {

noStroke();
fill("brown");
rectMode(CENTER);
rect(this.ground.position.x,this.ground.position.y,1400,20);

}










}