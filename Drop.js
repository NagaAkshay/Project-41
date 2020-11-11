class Drop{

    constructor(x,y){
        var options = {
            isStatic: false,
            friction:1
        }
        this.rain = Bodies.circle(x, y, 5, options);
        this.radius = 5;

        World.add(world, this.rain);
    }

    display(){
        ellipseMode(CENTER);
        fill("blue");
        ellipse(x, y, 5, 5);
    }

    rePosition(){
        if (this.rain.position.y > displayHeight) {
            Matter.body.setPosition(this.rain, {x:random(0, displayWidth), y:random(0, displayHeight)})
        }
    }
    
}