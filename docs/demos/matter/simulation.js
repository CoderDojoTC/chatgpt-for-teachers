// alias
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();
engine.world.gravity.y = 1;

// create a renderer
var render = Render.create({
    element: document.body,
    canvas: document.getElementById('canvas'),
    engine: engine,
    options: {
        wireframes: false
    }
});

// create a ball
var ball = Bodies.circle(400, 50, 50, {
    restitution: 0.8
});

// create a ground
var ground = Bodies.rectangle(400, 600, 810, 60, { isStatic: true });

// add ball to the world
World.add(engine.world, [ball, ground]);

// run the engine and renderer
Engine.run(engine);
Render.run(render);

// handle gravity slider changes
document.getElementById('gravity').addEventListener('input', function(event) {
    engine.world.gravity.y = event.target.value;
});

// handle reset button click
document.getElementById('reset').addEventListener('click', function() {
    Matter.Body.setPosition(ball, {x: 400, y: 50});
    Matter.Body.setVelocity(ball, {x: 0, y: 0});
});
