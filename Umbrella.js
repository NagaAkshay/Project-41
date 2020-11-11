class Umbrella{

    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.boyImage = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png",
        "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
        this.umbrella = Bodies.circle(x, y, 20, options);
        this.radius = 20;

        World.add(world, this.umbrella);
    }

    display(){
        imageMode(CENTER);
        image(this.boyImage, this.umbrella.x, this.umbrella.y);
    }
}