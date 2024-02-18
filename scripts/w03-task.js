/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function sum(a, b){
    return a + b
}

let num = sum(2, 5);
console.log(num);

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let result = sum(addNumber1, addNumber2)
    document.querySelector('#sum').value = result;
}
document.getElementById('addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function sub(a, b){
    return a - b
}
function subtractNumbers(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    let result = sub(subNumber1, subNumber2)
    document.querySelector('#difference').value = result;
}
document.getElementById('subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply=(a,b)=> {
    return a*b
};

const multiplyNumbers=()=>{
    let fac1= parseFloat(document.getElementById('factor1').value);
    let fac2 = parseFloat(document.getElementById('factor2').value);
    let product = multiply(fac1, fac2);
    document.querySelector('#product').value = product;
}
document.getElementById('multiplyNumbers').addEventListener('click',multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide =(a,b)=> {return a/b};
function divideNumbers(){
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.querySelector('#quotient').value= quotient;
}
 document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', GetTotalDue);
function GetTotalDue(){
    const subnum = document.getElementById('subtotal');
    const subtotal = parseFloat(subnum.value);  
    const isMember = document.getElementById('member').checked;
    let total = 0;
    if(isMember){
        total = subtotal - subtotal*0.2;
    }
    else{
        total = subtotal;
    }
    document.getElementById('total').textContent = Number(total);

}








/* ARRAY METHODS - Functional Programming */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
let aNumbers = numbers.join(', ')
document.getElementById('array').innerHTML = aNumbers;
/* Output Odds Only Array */
let odds = numbers.filter(num => num%2 !== 0);
let oddNumbers = odds.join(', ');
document.getElementById('odds').innerHTML = oddNumbers;
/* Output Evens Only Array */
let evens = filter(num => num%2 === 0);
let evenNumbers = odds.join(', ');
document.getElementById('evens').innerText = evenNumbers;
/* Output Sum of Org. Array */
let sums = numbers.reduce((sum,number)=>sum + number);
document.getElementById('sumOfArray').inneText = sums;
/* Output Multiplied by 2 Array */
let multiply2 = numbers.map(num => num*2);
let multiplied=multiply2.join(', ')
document.getElementById('multiplied').inneText = multiplied;

/* Output Sum of Multiplied by 2 Array */
let sumMulti = numbers.map(num=>num*2);
let sumMultied = sumMulti.reduce((sum, number)=>sum + number);
let SumMultiArray = sumMultied.join(', ')
document.getElementById('multiplied').innerHTML = SumMultiArray;