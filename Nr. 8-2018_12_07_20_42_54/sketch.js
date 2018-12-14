var theta = 0.0;
var phi = 0.0;
var vel_theta;
var vel_phi;

var theta1 = 0.0;
var phi1 = 0.0;
var vel_theta1;
var vel_phi1;

// Radio del plano / Plane radius (Pendulo1/Pendulum1)
var radio_x1 = 30;
var radio_y1 = 30;

// Radio del plano / Plane radius (Pendulo2/Pendulum2)
var radio_x2 = 250;
var radio_y2 = 250;

var friction = 0.9999999;

var x = 0.0;
var y = 0.0;

// Centro del plano / Center of plane
var cx = 0.0;
var cy = 0.0;

//var noise_size = 0.001;
var noise_size = 0.006;
//var noise_size = 0.01;

function setup(){
    createCanvas(500, 500);
	vel_theta = radians(0.001);
	vel_phi =  radians(0.001);
 	vel_theta1 = radians(0.2);
 	vel_phi1 =  radians(0.1);
    background(255);
}
function draw(){
    beginShape(POINTS);
    // More laps
    for (var i = 0; i < 500; i++){

        cx =  cos(theta) * radio_x1 * noise(x * noise_size, y * noise_size);
        cy =  sin(phi) * radio_y1 * noise(x * noise_size, y * noise_size);

        x = (width/2 + cx) + sin(theta1) * (radio_x2 * noise(x * noise_size, y * noise_size));
        y = (height/2 + cy) + cos(phi1) * (radio_y2 * noise(x * noise_size, y * noise_size));
        //y = (height/2 + cy) + cos(theta1) * (radio_y2 * noise(x * noise_size, y * noise_size));


        theta += vel_theta;
        phi   += vel_phi;

        theta1 += vel_theta1;
        phi1   += vel_phi1;



        stroke(0, 10);
        strokeWeight(1);
        vertex(x, y);

        radio_x1 *= friction;
        radio_y1 *= friction;

        radio_x2 *= friction;
        radio_y2 *= friction;
    }
    endShape();
}