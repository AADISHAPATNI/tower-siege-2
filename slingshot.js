class Slingshot{
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB
        
        length:0.04
        stiffness:1
          
        }
        this.sling = Constraint.create(options),
        this.pointB = pointB,
        World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA = null
    }
    display(){
        if(this.sling.bodyA){
            var pointB = this.sling.bodyA.position;
            var pointB = this.pointB;


            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointA.y)
        }
        if(keyCode===32){
            
        }
    }
}