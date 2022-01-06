var num1 = 12
var num2 = 24
var limit = 0
var factor = 0
if (num1 > num2) {
    limit = num2
}
else {
    limit = num1
}
let count = 1;

for (let i = 1; i <= limit; i++) {
    if ((num1 % i == 0) && (num2 % i == 0)) {
        factor = i
    }
    count++
}
console.log("hcf", factor);
console.log("count", count);