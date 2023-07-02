let molecules = [];
let sliderTemp, sliderMol;

function setup() {
    createCanvas(600, 400);
    sliderTemp = createSlider(1, 10, 5);
    sliderMol = createSlider(1, 100, 50);
    for (let i = 0; i < sliderMol.value(); i++) {
        molecules[i] = new Molecule();
    }
}

function draw() {
    background(51);
    for (let i = 0; i < sliderMol.value(); i++) {
        if (i < molecules.length) {
            molecules[i].update();
            molecules[i].show();
            molecules[i].edges();
        } else {
            let m = new Molecule();
            molecules.push(m);
        }
    }
    while (molecules.length > sliderMol.value()) {
        molecules.pop();
    }
}

class Molecule {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
    }

    update() {
        this.vel.setMag(sliderTemp.value());
        this.pos.add(this.vel);
    }

    edges() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
        }
    }

    show() {
        noStroke();
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 20);
    }
}
