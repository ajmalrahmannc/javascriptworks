var arr=[5,6,4,2,9,7,3]
arr.sort((n1,n2)=>n1-n2)
console.log(arr);
var element=6
var flag=0
var low=0,upp=arr.length-1
while(low<upp){
    let mid = Math.floor((low+upp)/2)

    //case 1

    if(element==arr[mid]){
        flag=1
        break
    }

    // case 2

    else if(element>arr[mid]){
        low=mid+1
    }

    // case 3

    else if(element<arr[mid]){
        upp=mid-1
    }
}
console.log(flag==0?"not found":"found");