var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",20000,"hr",1995,2010],
    [1002,"arjun",30000,"developer",1995,2012],
    [1003,"john",22000,"developer",1980,1988],
    [1004,"rahul",40000,"mrkt",2005,2015],
    [1005,"ajmal",25000,"ba",2003,2016]
]

//print heighest secound salary
employees.sort((e1,e2)=>e2[2]-e1[2])
console.log(employees[1][2]);

//minimum salary
console.log(employees[employees.length-1][2]);

//number of employees
console.log(employees.length);

//heighest salary amoung developers
var developer_details=[]
for (let employee of employees){
    if (employee[3]=="developer"){
        developer_details.push(employee)
    }
}
developer_details.sort((d1,d2)=>d2[2]-d2[2])
console.log(developer_details[0][2]);

//print details of employees whose name start with a or A
for(let employee of employees){
    if(employee[1][0]=="a" || employee[1][0]=="A"){
        console.log(employee);
    }
}


//print details of employees whose working period is  1995 to 2015
for(let employee of employees){
    if ( employee[4]>=1995 && employee[5]<=2015){
        console.log("here:",employee);
    }
}
