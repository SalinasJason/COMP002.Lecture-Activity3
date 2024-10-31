function greet(name) {
    console.log("Hello," + name);
}

greet("Jason");


function Circumference(diameter) {
    const pi = 3.14159; 
    return pi * diameter;
  }
  
  console.log(Circumference(10)); 
  
 
 
function printHelloWorld1() {
    console.log("This is printHelloWorld1()");
}

function printHelloWorld2() {
    console.log("This is printHelloWorld2()");
    printHelloWorld1();
}

printHelloWorld2();
printHelloWorld1();

