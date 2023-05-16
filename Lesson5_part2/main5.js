// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let s = (a,b) => a * b;
// console.log(s(22, 10))
let xxx = s(22,10);
console.log(xxx);
document.write(`<div>${xxx}</div>`)
console.log('**********************************************************')
document.write(`<hr> `);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let s1 = r => 3.14*(r*r);
// console.log(s(7))
let xxx1 = s1(7);
console.log(xxx1);
document.write(`<div>${xxx1}</div>`)
console.log('**********************************************************')
document.write(`<hr> `);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let s2 = (r,h)=>2*r*(r+h);
let qqq = s2(8,9)
console.log(qqq)
document.write(`<div>${qqq}</div>`)
console.log('**********************************************************')
document.write(`<hr> `);


// - створити функцію яка приймає масив та виводить кожен його елемент
let arr= [1,2,3,44,89,78,45,12];
const num = (arr) => {
    for (const arrElement of arr) {
        document.write(`<h2>${arrElement}</h2>`)
        console.log(arrElement)
    }
}
num(arr);

document.write(`<hr> `);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const textP = (text) => {
  document.write(` <p>${text}</p>`)
}
textP('функція, яка створює параграф з текстом');
document.write(`<hr> `);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<ul>`)
const textLi = (dis) => {
    for (let i = 0; i < 3; i++) {
        document.write(`<li> ${dis}</li>`)
    }
}
textLi('функція, яка створює ul з трьома елементами li')
document.write(`</ul>`)
document.write(`<hr> `);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<ul>`)
const textLi1 = (dis1, num) => {
    for (let i = 0; i < num; i++) {
        document.write(`<li> ${dis}</li>`)
    }
}
textLi('функція, яка створює ul з трьома елементами li, варіант другий ,кількість li визначається другим аргументом ', 3)
document.write(`</ul>`)
document.write(`<hr> `);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let aaa = [1,2,3,4,5,6,7,8,9,'look','wife', true, false, null  ];
document.write(`<ul>`)
const arrxxx = (arr1) => {
    for (const arr1Element of arr1) {
        document.write(`<li> ${arr1Element}</li>`)
    }
}
arrxxx(aaa);
document.write(`</ul>`);
document.write(`<hr> `);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id:2},
    {name: 'kolya', age: 29, id:3},
    {name: 'olya', age: 28, id:4},
    {name: 'max', age: 30, id:5},
    {name: 'anya', age: 31, id:6},
    {name: 'oleg', age: 28, id:7},
    {name: 'andrey', age: 29, id:8},

];
const usersxxx = (arr2) => {
    for (const arr2Element of arr2) {
        document.write(`<div>${arr2Element.id} - ${arr2Element.name} - ${arr2Element.age} </div>`)
    }
}
usersxxx(users );
document.write(`<hr> `);

// - створити функцію яка повертає найменьше число з
let arr1= [1,2,3,44,89,78,45,12];
const minNum = (num) => {
    let minN = num[0];
    for (const numElement of num) {
        if (minN < numElement[1]){
            minN = numElement[1]
        }
    }
    return minN;
}

 let nnn = minNum(arr1);
console.log(nnn);
document.write(`<h1> ${nnn} </h1>`)
document.write(`<hr> `);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sss = [10,10,10];
const sum = (arr2) => {
    let sum1 = 0;
    for (const arr2Element of arr2) {
        sum1 += arr2Element
    }
    return sum1
}
let nnn1 = sum(sss);
console.log(nnn1);
document.write(`<h1> ${nnn1} </h1>`);
document.write(`<hr> `);



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let fff =[[11,22,33,44],0,1] ;
const x2 = (aaa) => {
    let i0= aaa[0][0];
    let i1 = aaa[0][1];
    aaa[0][0] = i1;
    aaa[0][1] = i0
    return aaa;
}
let fff1 = x2(fff);
console.log(fff1)
document.write(`<h1> ${fff1} </h1>`);
document.write(`<hr> `);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValuesElement of currencyValues) {
         if (currencyValuesElement.currency === exchangeCurrency ) {
             return sumUAH/currencyValuesElement.value;
         }
    }
}
 let exchange1 = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(exchange1);
document.write(`<h1> ${exchange1} </h1>`);
document.write(`<hr> `);
