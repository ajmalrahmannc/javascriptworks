var num=678;

var res="";

while(num != 0){
    let last_digit=num % 10;
    res+=last_digit;
    num=Math.floor(num/10)
}
console.log(res);

