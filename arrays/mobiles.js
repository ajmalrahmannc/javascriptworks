var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4G"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]
// var nameById=mobiles.find(mob=>mob[0]==1003)
// console.log(nameById);  
//find : oru value mathrame print aavukayollu,duplications print aavoolaa(first value print aavum)

// var isavl=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
// console.log(isavl);

// var max=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)
// console.log(max);

// var low=mobiles.reduceRight((mob1,mob2)=>mob1[3]<mob2[3]?mob1:mob2)
// console.log(low);

//list all 5g mobile names
// var fiveg_mob=mobiles.filter(mob=>mob[6]=="5G").map(mob=>mob[2])
// console.log(fiveg_mob); 

// //list all 5g mobiles available under 35000
// var low_mob=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<=35000)
// console.log(low_mob);

// //list all samsung mobiles names whose band = 4g and display type AMOLED
// var sam_mob=mobiles.filter(mob=> mob[1]=="samsung" && mob[6]=="4G" && mob[5]=="AMOLED")
// console.log(sam_mob);










// price range 25k - 30k

// var mob_range=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000).map(mob=>[mob[1],mob[2],mob[3]])
// console.log(mob_range);


// var mob_price=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
// console.log(mob_price);

// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);

// var mob_prices=mobiles.map(mob=>mob[3])
// console.log(mob_prices);



// var sam=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
// console.log(sam);


//costly mobile
// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// console.log(mobiles[0]);

//snapdragon mobiles
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){
//         // console.log(mobile);
//     }
// }



// print costly mobile with processor snapdragon with 5g band

// var snap_5G=[]
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon" && mobile[6]=="5G") {
//         snap_5G.push(mobile)
//     }
// }
// snap_5G.sort((m1,m2)=>m2[3]-m1[3])
// console.log(snap_5G[0]);