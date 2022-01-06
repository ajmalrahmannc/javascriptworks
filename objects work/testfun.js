// function add(... parm){
//     return parm.reduce((n1,n2)=>n1+n2)
// }
let add=(... parm)=>parm.reduce((n1,n2)=>n1+n2)
console.log(add(30,40,50));

// function findMax(... args){
//     return args.reduce((n1,n2)=>n1>n2? n1 : n2)
// }
let findMax=(... args)=>args.reduce((n1,n2)=>n1>n2? n1 : n2)
console.log(findMax(30,20,40,5));