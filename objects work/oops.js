var baleno={
    name:"baleno",
    colors:["red","blue","white"],
    varients:"petrol",
    manufacture:"nexa",
    price:"8 lack",
    getPrice(){
        return this.price
    }
}

var glanza={
    name:"glanza",
    manufacture:"toyota",
    price:"9 lack"
}

glanza.__proto__=baleno
console.log(glanza.getPrice());