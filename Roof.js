class Roof{
    constructor(x,y,height,width){
    var options = {
    
    isStatic:true
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position;
    fill(215);
    rect(pos.x,pos.y,this.width,this.height)
    pop ();
    
    
    }
    
    
    
    
    }