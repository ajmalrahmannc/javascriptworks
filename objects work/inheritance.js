class Parent{
    bike(){
        console.log("pulsure");
    }
}


class Child extends Parent{
    bike(){
        super.bike
        console.log("dio");
    }
}

var ch=new Child()
ch.bike()