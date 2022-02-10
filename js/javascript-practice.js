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

// Codewars Exercises

function highAndLow(numbers){
    var arr = numbers.split(' ').map(Number)
    var highest = arr[0]
    var lowest = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i]
        }
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
    }
    return highest.toString() + ' ' + lowest.toString()
}

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

function digitize(n) {
    return Array.from (String(n), Number).reverse()
}

// console.log(digitize(12345));

function bmi(weight, height) {
    if ((weight / (height * height)) <= 18.5) {
        return "Underweight"
    } else if ((weight / (height * height)) >= 18.5 && (weight / (height * height)) <= 24.9) {
        return "Normal"
    } else if ((weight / (height * height)) >= 25 && (weight / (height * height)) <= 29.9) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

// console.log(bmi(50, 1.7));
// console.log(bmi(60, 1.7));
// console.log(bmi(80, 1.7));
// console.log(bmi(100, 1.7));
