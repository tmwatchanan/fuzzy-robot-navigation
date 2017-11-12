class Wall {
    constructor(x, y, w, h, a) {
        var options = {
            friction: 0.5,
            restitution: 0.5,
            angle: a,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
}

function addWalls() {
    const wallThickness = 500;
    const wt2 = wallThickness / 2;

    bottomWall = new Wall(width / 2, height + wt2, width, wallThickness, 0)
    topWall = new Wall(width / 2, -wt2, width, wallThickness, 0)

    leftWall = new Wall(-wt2, height / 2, height, wallThickness, PI / 2)
    rightWall = new Wall(width + wt2, height / 2, height, wallThickness, PI / 2)
}

const width = 600,
    height = 600,
    PI = 3.14;

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Events = Matter.Events,
    engine, world, render, runner, box;

//set inputs
var disWaypoint,
    disNearestObstacle = 999999,
    radToWaypoint,
    radAvoidObstacle,
    degRo,
    degWay,
    degObs,
    degWay_Obs,
    degRo_Obs;

var velocity,
    angle;

var obstacle = [];

var option = {
    // isStatic: true,
    render: {
        density: 1,
        friction: 0,
        frictionAir: 0,
        inertia: Infinity,
        sprite: {
            texture: './Roomba.png'
        }
    }
}

var Roomba = Bodies.circle(width / 2, height / 2, 15, option);

var isAnyBox = false;

function init() {
    engine = Engine.create();
    world = engine.world;

    // create renderer
    render = Render.create({
        element: document.getElementById('container'),
        engine: engine,
        options: {
            width: 600,
            height: 600,
            background: 'white',
            ShowAngleIndicator: false,
            wireframes: false
        }
    });

    engine.world.gravity.y = 0;

    Render.run(render);
    Engine.run(engine);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    addWalls();

    World.add(world, Roomba);

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: {
            x: 0,
            y: 0
        },
        max: {
            x: 600,
            y: 600
        }
    });

    //create obstacle
    obstacle.push(Bodies.rectangle(width / 3, height / 2, 10, 100, {
        isStatic: true
    }))
    obstacle.push(Bodies.rectangle(width - (width / 4), height / 2, 10, 200, {
        isStatic: true
    }))
    obstacle.push(Bodies.rectangle(width, height / 2, 10, 600, {
        isStatic: true,
        label: "[i=2]wall1"
    }))
    obstacle.push(Bodies.rectangle(0, height / 2, 10, 600, {
        isStatic: true,
        label: "[i=3]wall2"
    }))
    obstacle.push(Bodies.rectangle(width / 2, 0, 600, 10, {
        isStatic: true,
        label: "[i=4]wall3"
    }))
    obstacle.push(Bodies.rectangle(width / 2, height, 600, 10, {
        isStatic: true,
        label: "[i=5]wall4"
    }))
    World.add(world, obstacle);

    Events.on(engine, 'collisionStart', function (event) {
        var pairs = event.pairs;
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            if ((pair.bodyA.label === 'box' || pair.bodyB.label === 'box')) {
                Composite.remove(world, box);
                isAnyBox = false;
            }
        }
    });
}

function createWaypoint(event) {
    if (!draw) {
        var X = event.clientX,
            Y = event.clientY - document.getElementById("top").offsetHeight - 20 + $(document).scrollTop();

        console.log($(document).scrollTop());

        if (!isAnyBox) {
            isAnyBox = true;
        } else {
            Composite.remove(world, box);
        }
        box = Bodies.rectangle(X, Y, 10, 10, {
            label: 'box'
        });
        World.add(world, box);
    }
}

setInterval(function () {
    if (isAnyBox) {
        var deltaX = box.position.x - Roomba.position.x,
            deltaY = box.position.y - Roomba.position.y;
        radToWaypoint = Math.atan2(deltaY, deltaX) + Math.PI / 2;
        disWaypoint = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

        findNearestObstacle();

        degRo = (360 + (180 - ((Roomba.angle * (180 / Math.PI)) + 90))) % 360;
        degWay = (360 + (180 - ((radToWaypoint * (180 / Math.PI)) + 90))) % 360;
        degObs = (360 + (180 - ((radAvoidObstacle * (180 / Math.PI)) + 90))) % 360;
        // degObs = degObs > 180 ? 360 - degObs : degObs;
        degRo_Obs = Math.abs(degRo - degObs) > 180 ? 360 - Math.abs(degRo - degObs) : Math.abs(degRo - degObs);
        degWay_Obs = Math.abs(degWay - degObs) > 180 ? 360 - Math.abs(degWay - degObs) : Math.abs(degWay - degObs);

        find_beta();

        var Fx = (Bt * Math.cos(radToWaypoint) * px_cm(disWaypoint)) + (Bo * Math.cos(radAvoidObstacle) * 1 / px_cm(disNearestObstacle)) + (Bw * Math.cos(radAvoidObstacle - Math.PI / 2)) + (Bwd * Math.cos(Roomba.angle)),
            Fy = (Bt * Math.sin(radToWaypoint) * px_cm(disWaypoint)) + (Bo * Math.sin(radAvoidObstacle) * 1 / px_cm(disNearestObstacle)) + (Bw * Math.sin(radAvoidObstacle - Math.PI / 2)) + (Bwd * Math.sin(Roomba.angle));

        velocity = Math.sqrt((Fx * Fx) + (Fy * Fy))
        var Fangle = Math.atan2(Fy, Fx);
        // Body.setAngle(Roomba, radToWaypoint);

        Body.setAngle(Roomba, Fangle);
        // Body.setAngularVeolcity()

        // console.log(obstacle[0].vertices[0].x);

        var force = p5.Vector.fromAngle(Roomba.angle)
        // force.mult(velocity);
        Body.setVelocity(Roomba, {
            x: force.y,
            y: -force.x
        });
    } else {
        Body.setVelocity(Roomba, {
            x: 0,
            y: 0
        });
    }

    // ShowInputs();
}, 100)

function findNearestObstacle() {
    var nearest_x, nearest_y;
    disNearestObstacle = 99999;

    for (var i = 0; i < obstacle.length; i++) {
        var x = obstacle[i].vertices[0].x < obstacle[i].vertices[2].x ? obstacle[i].vertices[0].x : obstacle[i].vertices[2].x,
            y = obstacle[i].vertices[0].y < obstacle[i].vertices[2].y ? obstacle[i].vertices[0].y : obstacle[i].vertices[2].y,
            maxX = x == obstacle[i].vertices[2].x ? obstacle[i].vertices[0].x : obstacle[i].vertices[2].x,
            maxY = y == obstacle[i].vertices[2].y ? obstacle[i].vertices[0].y : obstacle[i].vertices[2].y;

        for (var xi = x; xi <= maxX; xi += 5) {
            for (var yi = y; yi <= maxY; yi += 5) {
                var dis = Math.sqrt(Math.pow((xi - Roomba.position.x), 2) + Math.pow((yi - Roomba.position.y), 2));
                if (disNearestObstacle > dis) {
                    disNearestObstacle = dis;
                    nearest_x = xi;
                    nearest_y = yi;
                }
            }
        }
    }
    console.log(disNearestObstacle)
    radAvoidObstacle = (Math.atan2(nearest_y - Roomba.position.y, nearest_x - Roomba.position.x)) - Math.PI / 2;
}

function px_cm(px) {
    return px / 37.7952755905511;
}

var ShowInputs = function () {
    document.getElementById("disWpt").innerHTML = "Distance from robot to waypoint(m) : " + Math.floor(px_cm(disWaypoint));
    document.getElementById("disObs").innerHTML = "Distance from robot to nearest obstacle(m) : " + Math.floor(px_cm(disNearestObstacle));
    document.getElementById("degRo").innerHTML = "Angle of Robot Heading(degree) : " + degRo;
    document.getElementById("degWay").innerHTML = "Angle of go_to_waypoint(degree) : " + degWay;
    document.getElementById("degObs").innerHTML = "Angle of avoid_obstacle : " + degObs;
}

var find_beta = function () {
    Bt = 0;
    Bo = 0;
    Bw = 0;
    Bwd = 0;
    firing_str_Bt();
    firing_str_Bo();
    firing_str_Bw();
    firing_str_Bwd();

    // console.log("angle = 23 x (" + B0 + " x " + Bw + ") = " + angle);
    // console.log(Bt + " | " + Bo + " | " + Bw + " | " + Bwd)
    // console.log(velocity + " | " + angle);
}