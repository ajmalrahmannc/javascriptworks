for(let row=1;row<=5;row++){
    let str=""
    for(let space=1;space<=(5-row);space++){
        str+=" "
    }
    for(let col=1;col<=row;col++){
        str+="* "
    }
    console.log(str);

}