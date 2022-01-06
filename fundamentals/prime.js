var num=7;

var flag=0;

for(let i=2;i<num;i++){
    if(num %i==0){
        flag=1;
        break;
    }
}
console.log(flag=0?"prime":"not prime");
// if(flag==0){
//     console.log("prime");
// }
// else{
//     console.log("not prime");
// }