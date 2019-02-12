console.clear();

// different variables
const myNumber = 45;
const myName = "MattyC";
const myGroceryList = ["peppers", "water", "kale"];
const Me = {
  firstName: "Matt",
  lastName: "Condit",
  age: "34"
};

// functions are first class, so they can also be assigned to variables
const sayHello = () => {
  console.log("Hello, there!");
};

// stnadard function that takes argument
const echo = str => {
  console.log(str);
};

// since functions are first class, they can be passed to other functions
const callFunctionTwice = (func, arg) => {
  func(arg);
  func(arg);
};

// as well as be returned from functions 
const createLoggedFunction = (func) => (arg) => {
  console.log(`function called with arg ${arg}`);
  const result = func(arg);
  console.log(`function returned value ${result}`);
  return result;
} 

// this is our unlogged function
// note: this is shorthand for return in javascript
const getSquare = (n) => n * n; 

const loggedGetSquare = createLoggedFunction(getSquare);

threeSquared = getSquare(3);
console.log('from original function', threeSquared);

// loggedGetSquare(3);