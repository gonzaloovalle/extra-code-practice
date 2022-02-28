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

function count (string) {
    var obj = {}
    if (string === "") {
        return {}
    }
    for (var i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(string[i])) {
            obj[string[i]] += 1
        } else {
            obj[string[i]] = 1
        }
    }
    return obj
}

// console.log(count("aba"));
// console.log(count("lolol"));
// console.log(count("Gonzalo"));


function areYouPlayingBanjo(name) {
    if (name.startsWith("R") || name.startsWith("r")) {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}

// console.log(areYouPlayingBanjo("Randy"));
// console.log(areYouPlayingBanjo("Roger"));
// console.log(areYouPlayingBanjo("Peter"));
// console.log(areYouPlayingBanjo("Lou"));


function smash (words) {
    return words.join(" ")
}

// console.log(smash(["hello", "world"]));
// console.log(smash(["hello", "amazing", "world"]));
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));


function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// console.log(feast("great blue heron", "garlic naan"));
// console.log(feast("chickadee", "chocolate cake"));
// console.log(feast("brown bear", "bear claw"));


function rentalCarCost(d) {
    if (d >= 7) {
        return (d*40) - 50
    } else if (d >= 3) {
        return (d*40) - 20
    } else {
        return d * 40
    }
}

// console.log(rentalCarCost(1));
// console.log(rentalCarCost(4));
// console.log(rentalCarCost(8));


function repeatStr (n, s) {
    var str = s
    for (var i = 1; i < n; i++) {
        str += s
    }
    return str
}

// console.log(repeatStr(6, "I"));
// console.log(repeatStr(5, "Hello"));


function findOdd(A) {
    var count = 0
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++
            }
        }
        if (count % 2 !== 0) {
            return A[i]
        }
    }
}

// console.log(findOdd([7]));
// console.log(findOdd([0]));
// console.log(findOdd([1, 1, 2]));
// console.log(findOdd([0, 1, 0, 1, 0]));
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));


function domainName(url){
    return url.replace(/.+\/\/|www.|\..+/g, '')
}

// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://www.zombie-bites.com"));
// console.log(domainName("https://www.cnet.com"));


function findUniq(arr) {
    let repeated = arr.filter((item, index) => arr.indexOf(item) !== index)
    return arr.filter((item)=> item !== repeated[0])[0]
}

// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));

function isPangram(string) {
    var regex = /([a-z])(?!.*\1)/gi;
    return (string.match(regex) || []).length === 26;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram("This sentence is not a pangram"));


function basicOp(operation, value1, value2)
{
    switch (operation) {
        case "+": return value1 + value2;
        case "-": return value1 - value2;
        case "*": return value1 * value2;
        case "/": return value1 / value2;
        default: return 0
    }
}

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));


function fibonacci(number) {
    let n1 = 0, n2 = 1, nextTerm;
    console.log("Fibonacci sequence: ");
    for (let i = 0; i < number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm
    }
    return n2
}

console.log(fibonacci(4));
console.log(fibonacci(10));
