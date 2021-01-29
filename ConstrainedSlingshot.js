class Slingshot{
    constructor(bodyA, point1){
        var options = {
            bodyA: bodyA,
            pointB: point1,
            stiffness: 0.04,
            length: 11
        }
        // slSt = slingshot
        
        this.cl = Constraint.create(options);
        this.point = point1;
        World.add(world, this.cl);
    }

    fly(){
        this.cl.bodyA = null;   
}


    display(){
       if(this.cl.bodyA)
       {var bodyA = this.cl.bodyA.position;
        var pointB = this.point;
        //strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    } 
    }
    
}