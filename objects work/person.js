var employee={
    eid:1000,
    name:"john",
    salary:25000,
    desig:"developer",
    exp:2
}
// console.log(employee.salary);  // employee salary print cheyyan
// employee.experience="6 months" 
// console.log(employee);

console.log("gender" in employee);  // gender eee objectil undo illeyo ennu check cheyyan in use cheyyam(it returns either true or false)

if("exp" in employee){
    employee.exp+=1
}
else{
    employee.exp=1
}
console.log(employee);