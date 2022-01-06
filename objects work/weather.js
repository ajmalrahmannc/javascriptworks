var dataset=[
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"ekm",temparature:28},
    {district:"ekm",temparature:31},

]
weather_data={}

for(let data of dataset){
    let distName=data.district
    let CurTemp=data.temparature
    if(distName in weather_data){
        let oldTemp=weather_data[distName]
        if(CurTemp>oldTemp){
            weather_data[distName]=CurTemp
        }
    }
    else{
        weather_data[distName]=CurTemp
    }
}

console.log(weather_data); 