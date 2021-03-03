class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1.2,
            length: 500
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        push()
        strokeWeight(10);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
    }
}