// var arr=[4,2,8,6,4]
// arr.sort((n1,n2)=>n1-n2)
// console.log(arr);

var arr=[10,11,12,15,16]
var element=15
var flag=0
for(let num of arr){
    if(num==element){
        flag=1
    }
}
console.log(flag==0?"value not found":"value found");
