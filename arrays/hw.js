// 08/12/21

// var arr=[9,6,7,8,3,2]
// for(let num of arr){
//     if(num<5){
//         num-=1
//     }
//     else{
//         num+=1
//     }
//     console.log(num);
// }


// 09/12/21

var arr=[2,4,6]
var sum=0
var dup=[]
var temp=0
for(let amount of arr){ 
    sum+=amount  
}
for(let amount of arr){ 
    temp=sum
    dup.push(temp-=amount)
}
console.log(dup);

