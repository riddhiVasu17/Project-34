const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();

    let options = {
        mouse : canvasmouse
    }

    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    pendulum1 = new Pendulum(350, 200, "#FF0366");
    pendulum2 = new Pendulum(500, 450, "#FF0366");
    pendulum3 = new Pendulum(650, 450, "#FF0366");
    pendulum4 = new Pendulum(800, 450, "#FF0366");
    pendulum5 = new Pendulum(950, 450, "#FF0366");


    sling1 = new Sling(pendulum1.body, { x: 390, y: 200 });
    sling2 = new Sling(pendulum2.body, { x: 540, y: 200 });
    sling3 = new Sling(pendulum3.body, { x: 690, y: 200 });
    sling4 = new Sling(pendulum4.body, { x: 840, y: 200 });
    sling5 = new Sling(pendulum5.body, { x: 990, y: 200 });

}

function draw() {
    background("#0D47A1");

    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body, {x : mouseX, y : mouseY});
}