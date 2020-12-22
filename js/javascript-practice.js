//Refactoring ES5 to ES6

const forth = seq => seq[3];


const last = seq => seq[seq.length - 1];


const timesTwoPlusThree = x => (x * 2) + 3;


const helloWorld = greeting => greeting;


const multiply = (x,y) => (x * y);


//Edabit exercises

function returnNegative(n){
    if (n < 0) {
        return n
    } else {
        return n * -1;
    }
}

function isSameNum(num1, num2) {
    return num1 === num2;
}

function findPerimeter(length, width) {
    return (length * 2) + (width * 2);
}

function addition(num) {
    return ++num;
}

function lessThan100(a, b) {
    return (a + b) < 100;
}