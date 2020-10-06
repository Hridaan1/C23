class Ground {
    constructor(w, h){
       
        var ground_options ={
            isStatic: true
        }
           
        this.body = Bodies.rectangle(200,390,width,height,ground_options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y, this.width,this.height);

    }  

     
}