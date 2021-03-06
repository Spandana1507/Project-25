class Paper {

    constructor(x, y) {

        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.radius = 80;
        this.body = Bodies.circle(x, y, this.radius/2, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        this.image = loadImage("paper.png")
    }

    display() {

        var pos = this.body.position;
       
        push();
        translate(pos.x, pos.y);
       
        imageMode(CENTER);
        strokeWeight(3);
        fill("lightblue");
        image(this.image,0, 0, this.radius, this.radius);
        pop();


    }

}