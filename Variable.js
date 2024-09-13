// let const var variable

//swapping of Variable
console.log("Swapping of variable ")
var a=10;
var b=20;
var temp= a;
a=b;
b=temp;
console.log("a: ",a);
console.log("b:",b);

// Var cane be accessed any every outside function and inside block
let z=12;
function test(){  
    let z=67;
    console.log("z value is :",z)

}
console.log("z is :",z)
test();
