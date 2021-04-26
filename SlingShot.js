class Slingshot{

    constructor(bodyA, pointB){
        var options = {
            pointB : pointB,
            bodyA: bodyA,
            stiffness: 0.05,
            length: 5 
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        



    }
    fly(){

            this.sling.bodyA = null;
    }
    

    attach(attachPolygon){
      this.sling.bodyA = attachPolygon;
    }

  display(){
    if (this.sling.bodyA ) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();

        stroke(255,170,29);
        
            strokeWeight(8);
            
            line(pointA.x , pointA.y, pointB.x, pointB.y);
            
           ;
        pop();
    }
    // console.log(this.sling.bodyA)
  }

}