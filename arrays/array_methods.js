// map

// var arr=[2,3,4,5,6,7,8,9]
// var squares=arr.map(num=>num**2)
// console.log(squares);

// var add_two=arr.map(num=>num+2)
// console.log(add_two);

// var names=["ajmal","jaleel","suneer","arshad","fuad"]
// var upp=names.map(name=>name.toUpperCase())
// console.log(upp);




//filter

// var arr=[2,3,4,5,6,7,8,9]
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);

// var names=["arjun","abhilash","aravind","Ajmal","ram","suhail"]
// var aname=names.filter(name=>name[0]=="a" || name[0]=="A")
// console.log(aname);


var arr=[2,3,4,5,6,7,8,9]
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);

var min=arr.reduce((ni,n2)=>n1<n2?n1:n2)

var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);

