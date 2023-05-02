// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello';
let s = 'owu';
let d = 'com';
let f = 1;
let g = 10;
let h = -999;
let j = 123;
const k = 3.14;
let l = 2.7;
let z = 16;
let x = true;
let x1 = false;

//     Вивести кожну змінну за допомогою: console.log
console.log(a);
console.log(s);
console.log(d);
console.log(f);
console.log(g);
console.log(h);
console.log(j);
console.log(k);
console.log(l);
console.log(z);
console.log(x);
console.log(x1);
console.log('');


// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Nevolina';
let middleName = 'Oksana';
let lastName = 'Mykolayivna';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);
console.log('');

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof(a1),a1);
console.log(typeof(b1),b1);
console.log(typeof (c1),c1);
console.log('');

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let nameUser = prompt('enter your name');
let surname = prompt('enter your surname');
let yourAge = +prompt(' your  age');

console.log(nameUser);
console.log(surname);
console.log(yourAge);