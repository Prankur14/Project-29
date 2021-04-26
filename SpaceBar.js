class SpaceBar{
    constructor(x, y, width, height){

        var options = {
            isStatic: true
        }
       
        this.body =  Bodies.rectangle(x, y, width, height ,options);
        this.height = height;
        this.width = width;
        this.image = loadImage("press_space.png");
        // this.image.scale = 0.3;
          
        World.add(world, this.body);

       

        }
        display(){
            imageMode(CENTER)
           
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

        }
            
    }


