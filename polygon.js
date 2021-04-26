class Polygon {
        constructor(x, y, width, height) {
                var options = {
                        'restitution': 0.8,
                        'friction': 1.0,
                        'density': 1.0
                        
                }
                this.body = Bodies.circle(110, 190, 20, options);
                this.width = width;
                this.height = height;

                this.image = loadImage('polygon.png');
                World.add(world, this.body)
                }

        display() {
                // var angle = this.body.angle;
        push();
         translate(this.body.position.x, this.body.position.y);
         rotate(this.body.angle);
        imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height);
        pop();
        console.log(this.body.speed)
        }


        sound(){
                if(this.body.position.y>358 && this.body.speed>1 && this.body.position.y<400 && this.body.position.x<900){
                        bounceSound.play()
                      }
                      
        }


}

