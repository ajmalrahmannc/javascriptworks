// var arr=[2,3,4,5]
// var sum=7
// var flag=0
// for(let i of arr){
//     for(let j of arr){
//         if((i+j)==sum){
//             console.log(`pairs are (${i},${j})`);
//             flag=1
//         }
//     }
//     if(flag==1){
//         break
//     }
// }

// var arr=[2,3,4,5]
// var element=6
// var upp=arr.length-1,low=0
// flag=0

// while(low<upp){
//     let cur_sum=arr[low]+arr[upp]

//     //case 1
//     if(element==cur_sum){
//         console.log(`pairs are (${arr[low]},${arr[upp]})`);
//         break
//     }
//     //case 2
//     else if(cur_sum<element){
//         low++
//     }
//     //case 3
//     else if(cur_sum>element){
//         upp--
//     }
// if(flag==0){
//     console.log(no pairs);
// }
// }






// var arr1=[10,11,20,21]
// var arr2=[11,12,20,21]
// var count=0
// for(let i of arr1){
//     for(let j of arr2){
//         if(i==j){
//             console.log(`commons are (${i},${j})`);
//         }
//         count++
//     }
// }
// console.log(count);



// var arr1=[10,11,20,21]
// var arr2=[11,12,20,21]
// var p1=0,p2=0
// var count=0
// var flag=0
// while(p1 < arr1.length && p2 < arr2.length){
//     if(arr1[p1]==arr2[p2]){
//     console.log("common element",arr1[p1]);
//     flag=1
//     p1++;
//     p2++
//     }
//     else if(arr1[p1]>arr2[p2]){
//         p2++
//     }
//     else if(arr1[p1]<arr2[p2]){
//         p1++
//     }
//     count++
// }
// if(flag==0){
//     console.log("no common elements");
// }
// console.log("count=",count);








