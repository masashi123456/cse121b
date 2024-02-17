/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function num(a, b){
    return a + b
}

let sum = num(2, 5);
console.log(sum);

/* Function Expression - Subtract Numbers */
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum') = sum(addNumber1 + addNumber2)
}

/* Arrow Function - Multiply Numbers */
const muliply=(a,b)=> a*b;

const multiplyNumber=()=>{
    let fac1= parseFloat(document.getElementById('factor1').value);
    let fac2 = parseFloat(document.getElementById('factor2').value);
    let product = multiply(fac1, fac2);
    return product; 
}

/* Open Function Use - Divide Numbers */
const divide =(a,b)=> a/b;
function devideNumbers(){
    let devidend = document.parseFloat(getElementById('devidend').value);
    let divisor = document.parseFloat(getElementById('devidend').value);
    let quotient = divide(devidend, divisor);
    return quotient;
}

/* Decision Structure */
document.getElementById('GetTotal').addEventListener('click', GetTotalDue);
const subnum = document.getElementById('subtotal');
const subtotal = parseFloat(subnum.value);




/* ARRAY METHODS - Functional Programming */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
let aNumbers = numbers.join(', ')
document.getElementById('array').add(aNumbers);
/* Output Odds Only Array */
let odds = filter(num => num%2 !== 0);
let oddNumbers = odds.join(', ');
document.getElementById('adds').inneText = oddNumbers;
/* Output Evens Only Array */
let evenss = filter(num => num%2 === 0);
let evenNumbers = odds.join(', ');
document.getElementById('evens').inneText = evenNumbers;
/* Output Sum of Org. Array */
let sums = numbers.reduce((sum,number)=>sum + number);
document.getElementById('sumOfArray').inneText = sums;
/* Output Multiplied by 2 Array */
let multiply = numbers.map(num => num*2);
let multiplied=multiply.join(', ')
document.getElementById('multiplied').inneText = multiplied;

/* Output Sum of Multiplied by 2 Array */
let sumMulti = numbers.map(num=>num*2);
let sumMultied = sumMulti.reduce((sum, number)=>sum + number);
let SumMultiArray = sumMultied.join(', ')
document.getElementById('multiplied').innerHTML = SumMultiArray;