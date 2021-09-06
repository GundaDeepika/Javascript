//let variable
let x=10;
//let x=10;     //we get error because,x is already exsisted in first line
let y=10;
console.log("x",x);
console.log("y",y);

//var 
var a = 10;
var a = 50;
console.log("a",a);


let x1 = 200;
if(x1) {
    let x1 = 5;
    console.log("The value inside", x1);
}
console.log("The value outside",x1);


//const variable
const name = "sun";
//const name = "moon";   ///error because,variable name mst be unique
const value = "sun";
console.log(name);
console.log(value);