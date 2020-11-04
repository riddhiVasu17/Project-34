class Sling {

    constructor(bodyA, pointB) {

        var option = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            angularStiffness : 1,
            length : 220

        }

        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y;

        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    }

    display() {

        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();

            strokeWeight(3.5);
            stroke("#FFDE03");
            line(pointB.x, pointB.y, pointA.x, pointA.y);

            pop();
        }
    }
}