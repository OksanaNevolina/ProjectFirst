// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let helloworld = 'HELLO WORLD';
let loremipsum = 'LOREM IPSUM';
let javascriptiscool = 'JAVASCRIPT IS COOL';
console.log(helloworld.toLowerCase());
console.log(loremipsum.toLowerCase());
console.log(javascriptiscool.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim());

//

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']

    let str4 = 'Ревуть воли як ясла повні';
    function stringToarray(str) {
      let s =  str4.split(' ');
      return s;
    }
let arr = stringToarray(str4);
console.log(arr);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numStr =[10,8,-7,55,987,-1011,0,1050,0];
  let s2 = numStr.map(value => value + ' ');
console.log(s2);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

let sortNums = (nums,direction) => {
    if (direction === 'ascending') {
        let ascending = nums.sort((a, b) => a - b)
        console.log(ascending)
    }
     else if (direction === 'descending') {
        let descending = nums.sort((a, b) => b - a)
        console.log(descending)
    }
}
let nums = [11,21,3];
sortNums(nums,'ascending');
 // // [3,11,21]
sortNums(nums,'descending')
// [21,11,3]


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
 let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);
console.log(' ')
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let fill = coursesAndDurationArray.filter((value )=> value.monthDuration > 5);
console.log(fill)
console.log(' ')

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let s3 = coursesAndDurationArray.map((value,index )=> {
    return { ...value,id:index+1}
})
console.log(s3);
console.log(' ')

// =========================


let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз
let aceSpade = cards.filter(value => {
    if (value.cardSuit === 'spade' && value.value === 'ace'){
        console.log(value)
    }

})
console.log(' ')
// - всі шістки
let car6 = cards.filter(value => {
    if (value.value === '6'){
        console.log(value)
    }

})
console.log(' ')
    // - всі червоні карти
let carRed = cards.filter(value => {
    if (value.color === 'red'){
        console.log(value)
    }

})
console.log(' ')
    // / - всі буби
let cardiamond = cards.filter(value => {
    if (value.cardSuit === 'diamond'){
        console.log(value)
    }

})
console.log(' ')
// - всі трефи від 9 та більше
let carclubs9 = cards.filter(value => value.cardSuit === "clubs"
         && (value.value  >="9"
        || parseInt(value.value) >= 9));
console.log(carclubs9)
console.log(' ')

//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях"
//     в об'єкт     ЗАПОВНЮЄ ТІЛЬКИ ОДИН МАСИВ, ПРОБУВАЛА І ЧЕРЕЗ IF І ЧЕРЕЗ switch ВСЕОДНО
let cardsss = cards.reduce((acc,car)=>{
switch (car.cardSuit) {
    case 'spades':
        acc.spades.push(car);
        break;

    case 'diamonds':
        acc.diamonds.push(car);
        break;

    case 'hearts':
        acc.hearts.push(car);
        break;

    case 'clubs':
        acc.clubs.push(car);
        break;
    }
    return acc
},{ spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(cardsss);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray =
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js','css']
    }

// --написати пошук всіх об'єктів, в який в modules є sass

console.log( coursesArray.modules.indexOf('css'));
// --написати пошук всіх об'єктів, в який в modules є dockerlet coursesArray
console.log( coursesArray.modules.indexOf('docker'));
// Останє завдання не правильне, тому що знахожу перший , а не всі , а в умові потрібно всі.... буду дивитися на розборі