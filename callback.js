// Callback is a function which is passed as a reference to the other function as a parameter/argument

const list = ['foot', 'volley', 'basket'];

var newList = list.map((val) => val + 'ball');

// Callback function in the above statement is (val) => val + 'ball'
// So in this context the map function accepts a callback function and call the function on each iteration to create a new array

// this can be separated and placed as variable

console.log(newList)


function logError() {
  console.log("Error");
}


function displayInfo (val) {
  console.log("Displaying Value", val)
}


// the above functions are a normal function which can be used a callback function inside a large set of codebase or a large application 

