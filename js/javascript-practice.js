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

function oddOrEven(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    if (sum % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

// console.log(oddOrEven([1, 2, 3, 4, 5]));
// console.log(oddOrEven([2, 4, 6]));

function removeSmallest(numbers) {
    return numbers.filter(function(n) { return n !== Math.min.apply( Math, numbers ) })
}

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([5, 3, 2, 8, 1, 4]));

function reverseString(str){
    return str.split('').reverse().join('')
}

// console.log(reverseString('hello'));
// console.log(reverseString('world'));

function countSmileys(arr) {
    var matches = arr.join("").match(/[:;][-~]?[)D]/g);
    return matches ? matches.length : 0;
}

// console.log(countSmileys([':)', ';(', ';}', ':-D']));
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));

var summation = function (num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// console.log(summation(8));
// console.log(summation(10));

//Incomplete Solution - Only works for first uppercase letter in string
// function breakCamelCase(string) {
//     var strArr = string.split("");
//     for (var i = 0; i < strArr.length; i++) {
//         if (strArr[i] === strArr[i].toUpperCase() ) {
//             strArr.splice(i, 0, " ");
//             return strArr.join("");
//         }
//     }
// }

//Regex Solution
function breakCamelCase(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
}

// console.log(breakCamelCase("helloWorld"));
// console.log(breakCamelCase("codeupRocks"));

function countBy(x, n) {
    let z = [];
    for (var i = 1; i <= n; i++) {
        z.push(i*x);
    }
    return z;
}

// console.log(countBy(1, 10));
// console.log(countBy(2, 5));

var uniqueInOrder=function(iterable){
    var unique = ""
    for (var i = 0; i < iterable.length; i++) {
        if (unique.includes(iterable[i]) === false) {
            unique += iterable[i]
            var uniqueArr = unique.split("")
        }
    }
    return uniqueArr
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

function rowSumOddNumbers(n) {
    var sum = 0
    for (var i = 1; i <= n; i++) {
        sum += i + 2
    }
    return sum
}

// console.log(rowSumOddNumbers(42));
// console.log(rowSumOddNumbers(10));


function sumMix(x){
    var sum = 0
    for (var i = 0; i < x.length; i++) {
        sum += parseFloat(x[i])
    }
    return sum
}

// console.log(sumMix([9, 3, '7', '3']));
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

// console.log(simpleMultiplication(10));
// console.log(simpleMultiplication(11));
// console.log(simpleMultiplication(3));
// console.log(simpleMultiplication(8));

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

// console.log(reverseWords("This is an example!"));
// console.log(reverseWords("double  spaces"));




