var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",10000,50,9500,9,6]   
]

// q1 higest test + ve case district
    // var max=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)[1]
    // console.log(max);

// q2 district with higest 1 dose vaccination rate
    // var max_fdose=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[1]
    // console.log(max_fdose);

// q3 district with lowest death cases
    // var min_death=covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)[1]
    // console.log(min_death);

// q4 sort district with +ve cases
    // var sortWithPositive=covid_data.sort((d1,d2)=>d1[2]-d2[2]).map(d1=>d1[1])
    // console.log(sortWithPositive);

// q5 sort the districts based on 1st dose
    // var sortWithFirst=covid_data.sort((d1,d2)=>d1[5]-d2[5]).map(d1=>d1[1])
    // console.log(sortWithFirst);

// q6 is there any states with +ve cases > 60000
    // var any_states=covid_data.some(d1=>d1[2]>60000)
    // console.log(any_states);

// q7 print trissur details
    // var thrissur=covid_data.filter(d1=>d1[1]=="thrissur")
    // console.log(thrissur);

// q8 total number of +ve cases
    // var totalPositive=0
    // covid_data.filter(p1=>totalPositive+=p1[2])
    // console.log(totalPositive);

// q9 total number of cured cases
    // var totalcured=0
    // covid_data.filter(c1=>totalcured+=c1[4])
    // console.log(totalcured);


// q10 cured numbers of iduky
    // var idukyCured=covid_data.find(d=>d[1]=="iduky")[4]
    // console.log(idukyCured);

// q11 total number of death cases
    // var totalDeath=0
    // covid_data.filter(d1=>totalDeath+=d1[3])
    // console.log(totalDeath);

    // var total_death=covid_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
    // console.log(total_death);