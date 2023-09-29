//G00402833
//Written on OSX 14.0
//Excercise 1 lab1

//test code, using print, function and method calls
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
//value can be passed as parametre in arrow function
let test = (myValue) => {
    console.log(myValue);
}
test("Bonjour");

//E1(c)
//give two parametres to arrow function
let calc = (num1, num2) => {
    //adds numbers
    console.log(num1 + num2);
}
//calc takes two parametres to add, passing them to arrow func
calc(3, 4);

//E1(d)
 const ages = [25, 31, 42, 77];

 //uses map argument to define each value in array as item
 let mult = ages.map((item) => {
    //with each value now being tied to item, manipulate easily
    return item * 2;
 });
 //output array
 console.log(mult);


