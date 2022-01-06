var num=123;
var sum=0;
while(num !=0){ //true
    let digit=num % 10; //3,
    sum+=digit**3; //3 +
    num=Math.floor(num/10)
}
console.log(sum);


