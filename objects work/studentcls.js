class student{

    constructor(name,std,admno){
        this.name=name;
        this.std=std;
        this.admno=admno
    }
    printStudent(){
        console.log(this.name,this.std,this.admno);
    }
}

var student1=new student("ajmal",10,"1001")
student1.printStudent()

var student2=new student("rahman",8,"8001")
student2.printStudent()