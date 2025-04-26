let price=100;
const taxrate=0.1;
let quantity=3;
let totalCost=(price*quantity*(1+taxrate));
quantity=5;
let totalCost2=(price*quantity*(1+taxrate));
console.log("Total Cost 1: " + totalCost);
console.log("Total Cost 2: " + totalCost2);

//Datatypes Manipulation
let score = 95, message="Greate job!",isPassing=true,student = { name: "Emma", age: 20 }
const grades=[90,85,88];
console.log(typeof(score),typeof(message),typeof(isPassing),typeof(student));
console.log(typeof(grades));

//second grade
console.log(grades[1])
console.log(student.name)

//Opeartors
let a=10,b=3;
let add = a+b;
console.log(add)
let modulo = a%b;
console.log(modulo)
let exponents = a**2
console.log(exponents)
//comparison
console.log(a > b, a === b)
//logicaal Operators
console.log((a > 5) && (b < 5))

a +=5
console.log(a)

//coercion
console.log(5=="5")
console.log(5==="5")
