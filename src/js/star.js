const p5 = require('p5');

export class Star {
    constructor(x, y, z, pz) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pz = z;
    }
    show() {
        p5.fill(255);
        noStroke();
        let sx = map(this.x / this.z, 0, 1, 0, width)
        let sy = map(this.y / this.z, 0, 1, 0, height)
        let distace = map(this.z, 0, width, 5, 0);
        ellipse(sx, sy, distace, distace);
        let px = map(this.x / this.pz, 0, 1, 0, width);
        let py = map(this.y / this.pz, 0, 1, 0, height);
        this.pz = this.z;
        stroke(255);
        line(px, py, sx, sy);
    }
    update() {
        this.z = this.z - speed;
        if (this.z < 1) {                                           
            this.z = random(width)
            this.x = random(-width, width)
            this.y = random(-height, height)
            this.pz = this.z
        }
    }
}
