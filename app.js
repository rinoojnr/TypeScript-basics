"use strict";
const number1 = document.getElementById('n1');
const number2 = document.getElementById('n2');
const addButton = document.querySelector('button');
const numArray = [];
// const numArray: Array<number> = []  GENERIC
const stringArray = [];
// interface ResultObject  {
//     valueNum: number; 
//     valueString: string; time: Date
// }
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else if (typeof n1 === 'string' && typeof n2 === 'string') {
        return n1 + n2;
    }
    else {
        return +n1 + +n2;
    }
}
function printNumber(resultObject) {
    console.log(resultObject);
}
addButton.addEventListener('click', () => {
    let num1 = number1.value;
    let num2 = number2.value;
    let result = add(+num1, +num2);
    let result1 = add(num1, num2);
    stringArray.push(result1);
    numArray.push(result);
    console.log(stringArray);
    console.log(numArray);
    printNumber({ valueNum: result, valueString: result1, time: new Date() });
});
const myPromise = new Promise((resolve, reject) => [
    setTimeout(() => {
        resolve("its working");
    }, 2000)
]);
myPromise.then((res) => {
    console.log(res.split('o'));
});
