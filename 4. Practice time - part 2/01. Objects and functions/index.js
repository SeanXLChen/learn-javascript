// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
    name: "Sean",
    age: 30,
    country: "China"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData(personObject){
    return personObject.name + " is " + personObject.age + " years old.";
}

// Call the logData() function to verify that it works
console.log(logData(person));