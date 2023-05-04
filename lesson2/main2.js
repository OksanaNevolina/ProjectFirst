// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, 2, 3, 4, 5, 'red', 'task', 'Oksana', 'true', 'true1'];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);
console.log(' ');

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj1 = {
    title: 'Mary Poppins',
    pageCount: 50,
    genre: 'fantasy'
}
let obj2 = {
    title: 'Happy Prince',
    pageCount: 75,
    genre: 'fantasy'
}
let obj3 = {
    title: 'Harry Potter',
    pageCount: 100,
    genre: 'fantasy'
}
console.log(obj1, obj3, obj3);
console.log(' ');

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Mary Poppins',
    pageCount: 50,
    genre: 'fantasy',
    authors: {
        name: 'P.L.TRAVERS',
        age: 55
    }
}
let book2 = {
    title: 'Happy Prince',
    pageCount: 75,
    genre: 'fantasy',
    authors: {
        name: 'T.R.HOLLY',
        age: 55
    }
}
let book3 = {
    title: 'Harry Potter',
    pageCount: 100,
    genre: 'fantasy',
    authors: {
        name: 'J.K.ROWLING',
        age: 55
    }
}
console.log(book1);
console.log(book2);
console.log(book3);
console.log(' ');

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Olya',
        userName: 'Koka',
        password: 1111
    },
    {
        name: 'Katya',
        userName: 'Buba',
        password: 2222
    },
    {
        name: 'Valya',
        userName: 'Ruba',
        password: 3333
    },
    {
        name: 'Kolya',
        userName: 'Kozak',
        password: 4444
    },
    {
        name: 'Vova',
        userName: 'Vus',
        password: 5555
    },
    {
        name: 'Valik',
        userName: 'Lik',
        password: 6666
    },
    {
        name: 'Anna',
        userName: 'Anna',
        password: 7777
    },
    {
        name: 'Oksana',
        userName: 'Sana',
        password: 8888
    },
    {
        name: 'Diana',
        userName: 'Ana',
        password: 9999
    },
    {
        name: 'Mia',
        userName: 'Mia',
        password: 1010
    }

]
console.log(users);
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
console.log(' ');

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.

let x = 5;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a1 = 1;
if (a1 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}


let a2 = 0;
if (a2 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

let a3 = -3;
if (a3 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
console.log(' ');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 50;
if (time <= 15) {
    console.log('Перша частина години')
} else if (time < 30) {
    console.log('Друга частина години')
} else if (time < 45) {
    console.log('Третя частина години')
} else if (time < 60) {
    console.log('Четверта частина години')
} else {
    console.log('!!!!!!!!!!!!!!!!!')
}

console.log(' ')
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 12;
if (day <= 10) {
    console.log('Перша частина місяця')
} else if (day < 20) {
    console.log('Друга частина місяця')
} else if (day < 31) {
    console.log('Третя частина місяця')
} else {
    console.log('!!!!!!!!!!!!!!!!!')
}
console.log(' ');
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = prompt(' Enter the day');
switch (week) {
    case 'Monday' :
        console.log('Зустріч з представниками компанії ТОВ "Вусанчик"')
        break;
    case 'Tuesday' :
        console.log('Зустріч з представниками компанії ТОВ "ДЮС Сервіс"')
        break;
    case 'Wednesday' :
        console.log('Зустріч з представниками компанії ТОВ "МХП"')
        break;
    case 'Thursday' :
        console.log('Зустріч з представниками компанії ТОВ "ДЮС Трейд"')
        break;
    case 'Friday' :
        console.log('Зустріч з представниками компанії ТОВ "Інженерні мережі"')
        break;
    case 'Saturday' :
        console.log('Шопінг в "Лавіні"')
        break;
    case 'Sanday' :
        console.log('Поїздка в парк "Феофанія" о 14:00')
        break;
    default:
        console.log('Вільний час!!!!!!!!!!!!!!!!')
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');
if (num1 === num2) {
    console.log('числа рівні')
} else if (num1 > num2) {
    console.log(' Перше введене число , являється максимальним, так як перше число більше за друге!!!!!!!!!!!')
} else if (num1 < num2) {
    console.log(' Друге введене число , являється максимальним , так як друге число більше за перше!!!!!!!!!!!')
} else {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}
console.log(' ');

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// варіант 1 , за допомогою if
let x1 = prompt(' Ввести один з кольорів зебри');
if (x1 === 'white' || x1 === 'black') {
    console.log('ok')
} else {
    console.log("відповідь невірна")
}
console.log(' ');

// варіант  , за допомогою switch
let x2 = prompt(' Ввести один з кольорів зебри');
switch (x2) {
    case 'white':
    case 'black':
        console.log('ok')
        break;
    default:
        console.log('відповідь невірна');

}

console.log(' ');
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);
if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Супер');

}if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Супер');

}if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Супер');

}if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Супер');

}if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Супер');

}if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Супер');

} else {
    console.log('погано')
}




