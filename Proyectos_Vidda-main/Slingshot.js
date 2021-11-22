class Slingshot {
    //1
    // constructor(bodyA, bodyB) {
    constructor(bodyA, pointB) {
    // constructor(BodyA, PointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        //2
        this.sling = Constraint.create(options);
        // this.sling = Constraint.create();
        // this.sling = Constraint.create(constructor);
        this.pointB = pointB;
        World.add(world, this.sling);

    }

    fly() {
        //6
        this.sling.bodyA = null;
        // this.sling.bodyA = body;
        // this.sling.bodyA = bodyA;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("turquoise");
            //3
            // line(pointA.x, pointB.y, pointB.x, pointA.y);
            // line(pointA.x, pointA.x, pointB.y, pointB.y);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }

    //11
    // attach(body){
    //     this.sling.bodyA=bodyA;
    //  }
    
    // attach(body){
    //     this.bodyA=body;
    //  }

     attach(body){
        this.sling.bodyA=body;
     }

}