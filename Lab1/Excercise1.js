//G00402833
//Written on OSX 14.0
//Excercise 1 lab1

console.log("Hello World");

function hello() {
    console.log("hi");
}

hello();


//example of anonymous arrow function
//E1(a)
let sayBi = ()=> {
    console.log("Data Representation and Querying");
}
sayBi();

//E1(b)
let test = (myValue) => {
    console.log(myValue);
}
test("Bonjour");

//E1(c)
let calc = (num1, num2) => {
    console.log(num1 + num2);
}
calc(3, 4);

//E1(d)
let mult = (num1,  num2) => {
    console.log(num1, num2);
}
