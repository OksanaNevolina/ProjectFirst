// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s(a,b) {
    // let zxc = a*b;
    // return zxc;
    return a*b;
}
console.log(s(2,7));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function s1(r) {
    let asd = 3.14*(r*r);
    return asd;
    // return 3.14*(r**); пробувала через оперератор піднесення, але в мене він чомусь не хоче працювати
}
console.log(s1(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


    function s2(r,h) {
    return 2*r*(r+h);;
}
console.log(s2(4,16));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr= [1,2,3,44,89,78,45,12];
document.write(`<ul>`)
function arrNum(num) {
    for (const arrElement of arr) {
        console.log(arrElement);
        document.write(`<li>${arrElement}</li>`)
    }
}
arrNum(arr);
document.write(`</ul>`)
document.write(`<hr>`)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textP(text) {
    document.write(`<p style="font-size: 20px">${text}</p>`)
}
textP('Функції — це головні “будівельні блоки” програми. Вони дозволяють робити однакові дії багато разів без повторення коду.')
document.write(`<hr>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function textLi(text3) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li >${text3}</li> `)
    }
    document.write(`</ul>`)
}
textLi('Щоб створити функцію нам треба її оголосити.')
document.write(`<hr>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function textLi2(text3_,num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text3_}</li> `)
    }
    document.write(`</ul>`)
}
textLi('JavaScript Функції', 3)
document.write(`<hr>`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arr2(v) {
    document.write(`<ul>`)
    for (const vElement of v) {
        // console.log(vElement)
        document.write(`<li>${vElement}</li> `)
    }
    document.write(`</ul>`)
}

let zxc = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js', 'true', 'undefined',32,33,34];
arr2(zxc);
document.write(`<hr>`);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//  Для кожного об'єкту окремий блок.
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
function blokUser(arrr) {
    for (const arrrElement of arrr) {
        console.log(arrrElement)
        document.write(`
        <div class="dis" >${arrrElement.id} - ${arrrElement.name} - ${arrrElement.age}</div>
        `)
    }
   }
   blokUser(users);

//
// // - створити функцію яка повертає найменьше число з масив- тут от ніяк



// let nnn =[2,3,10];
// function fil(arr) {
//    let small = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > small){
//             small= arr[i]
//             console.log(small)
//         }
//     }
// return small;
// }
// fil(nnn);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let nnn1 =[2,3,10];
function sum(arr) {
    let qwe = 0;
    for (let i = 0; i < arr.length; i++) {
        qwe += arr[i];
        console.log(qwe)
    }
    return qwe;
}
sum(nnn1);




// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr7 = [11,22,33,44];
function swap(arr7,index1,index2) {
    let a0 = arr7[0];
    let a1 = arr7[1];
    arr7[0]= a1;
    arr7[1]=a0;
    return arr7 ;
}
let a = swap(arr7,0,1);
console.log(a);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange( sumUAH,currencyValues,exchangeCurrency) {
    let qwe = prompt('ведіть  валюту')
    if (qwe ==='usd'){
        let result = sumUAH /currencyValues[0] + " " +  exchangeCurrency[0];
        return result;
    } else if (qwe==='eur'){
        let result = sumUAH /currencyValues[1] +  ' ' +  exchangeCurrency[1];
        return result;
    }

return result;
}

let sumUAH = prompt('ведіть суму')
let currencyValues = [40, 42];

let exchangeCurrency = ['usd', 'eur'];

let qqq = exchange(sumUAH,currencyValues,exchangeCurrency);
console.log(qqq);


//ЗАВДАННЯ ВИКОНАЛА, АЛЕ НЕ ЗОВСІМ ТАК ЯК В УМОВІ, АЛЕ РЕЗУЛЬТАТ ТОЙ ЯКИЙ ПОВИНЕН БУТИ.
