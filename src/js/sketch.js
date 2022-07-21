// Rain
// class Star{

//     constructor(x,y,yspeed){
//         this.x = x;
//         this.y = y;
//         this.yspeed = yspeed;
//     }
//     show(){
//         stroke(138,43,226);
//         line(this.x , this.y , this.x , this.y +10)
//     }
//     fallback(){
//         this.y = this.y + this.yspeed
//         if(this.y > height){
//             this.y = random(-200 , -100);
//         }
//     }

// }
// var drops = new Array(100); ;
// function setup(){
//     createCanvas(640,250);
//     for(let i = 0; i < drops.length; i++){
//         drops[i] = new Star(random(width) , random(-200 , -100) ,random(4,10) );
//     }

// }
// function draw(){
//      
//     background(230,230,250);
//     for(let i = 0; i < drops.length; i++){
//         drops[i].show();
//         drops[i].fallback();
//     }


// }

//Stars
var speed;
class Star {
    constructor(x, y, z, pz) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pz = z;
    }
    show() {
        fill(255);
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
var drops = new Array(300);

function setup() {
    var temp1 = document.getElementById('home').getBoundingClientRect()
    const heightcs = document.getElementById('home').offsetHeight
    let cnv = createCanvas(temp1.width, heightcs);
    cnv.parent("home");
    cnv.style('position', 'absolute');
    cnv.style('top', '0');
    cnv.style('left', '0');
    cnv.style('z-index', '5');

    for (let i = 0; i < drops.length; i++) {
        drops[i] = new Star(random(-width, width), random(-height, height), random(width));
    }
}
function draw() {

    speed = map(mouseX, 0, width, 5, 20);
    background(25, 32, 36);
    translate(mouseX * 0.5, mouseY * 0.5);
    for (let i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].update();
    }
}




     //test.addEventListener("mouseenter", function (event) {
                    //    let sketch = function (p) {
                    //        p.setup = function () {
                    //            p.createCanvas(100, 100);
                    //            p.background(0);
                    //        }

                    //        var speed;
                    //        class Star {
                    //            constructor(x, y, z, pz) {
                    //                this.x = x;
                    //                this.y = y;
                    //                this.z = z;
                    //                this.pz = z;
                    //            }
                    //            show() {
                    //                fill(255);
                    //                noStroke();
                    //                let sx = map(this.x / this.z, 0, 1, 0, width)
                    //                let sy = map(this.y / this.z, 0, 1, 0, height)
                    //                let distace = map(this.z, 0, width, 5, 0);
                    //                ellipse(sx, sy, distace, distace);
                    //                let px = map(this.x / this.pz, 0, 1, 0, width);
                    //                let py = map(this.y / this.pz, 0, 1, 0, height);
                    //                this.pz = this.z;
                    //                stroke(255);
                    //                line(px, py, sx, sy);
                    //            }
                    //            update() {
                    //                this.z = this.z - speed;
                    //                if (this.z < 1) {
                    //                    this.z = random(width)
                    //                    this.x = random(-width, width)
                    //                    this.y = random(-height, height)
                    //                    this.pz = this.z
                    //                }
                    //            }
                    //        }
                    //        var drops = new Array(300);

                    //        p.setup = function () {
                    //            createCanvas(window.innerWidth, window.innerHeight);
                    //            for (let i = 0; i < drops.length; i++) {
                    //                drops[i] = new Star(random(-width, width), random(-height, height), random(width));
                    //            }
                    //        }
                    //        p.draw = function () {
                    //            speed = map(mouseX, 0, width, 0, 20);
                    //            background(0);
                    //            translate(width / 2, height / 2);
                    //            for (let i = 0; i < drops.length; i++) {
                    //                drops[i].show();
                    //                drops[i].update();
                    //            }
                    //        }
                    //    };
                    //    new p5(sketch, 'ImgDivForSketch');
                    //}, false);