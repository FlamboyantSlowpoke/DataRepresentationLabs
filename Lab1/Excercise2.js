//G00402833
//Written on OSX 14.0
//Excercise 2 lab1

//shift alt f good shortcut

//E2(a)
//creates an array of pre defined Strings
const tasks = ["Nemo", "Dory", "Patrick"];


//E2(b)
//creates >func which accepts a name
let addTask = (name) => {

    //.push inserts elements into array
    tasks.push(name);
    console.log("Task:" +name+ " added");
    console.log(tasks.length); // reads out length of array
    
}
//adds bruce to string array using arrow function
addTask("Bruce");

//E2(c)
//displays all names in the tasks array
let listAllTasks = tasks.map((name) => {//tasks.map reads through array
        //return function for name
        return name;
    });
    //outputs function
    console.log(listAllTasks);

//E2(d)
//deletes given parametre from array
let deleteTask = (name) => {
    //goes through array until name is found
    let index = tasks.indexOf(name);

    //if value is not found, returns message
    if (index > -1){
    //removes name value selected as index, 1 stops it from deleting further
    tasks.splice(index, 1);
    console.log(name+ " was deleted from the array");
    } else {
        console.log(name+ " was not found in the array");
    }
    console.log(tasks.length);
    //outputs array for debug purposes
    console.log(tasks);
}
//method with parameter deletes patrick
deleteTask("Patrick");
