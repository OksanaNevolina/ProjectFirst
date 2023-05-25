// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User( id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;

}
let users =[
    new User( 6,'Oksana','Nevolina','sdsfsf@sdgds.df', 0984558569 ),
    new User(2,'Anna','Nevolina','sdsdsdgurytrdsds@sdgds.df', 0632442352),
    new User(4,'Olya','Kova','klj@sdgds.df', 0975248563),
    new User(3,'Lola','Oppa','fgtrt@sdgds.df', 0967573678),
    new User(5,'Valik','Gad','sdsfskuyuyf@sdgds.df', 0957854132),
    new User(1,'Pavlo','Kin','hjhhff@sdgds.df', 0987576588),
    new User(7,'Mia','Busya','56656hhj@sdgds.df', 0676968574),
    new User(8,'Laaa','lol','yytrrrr@sdgds.df', 0934562496),
    new User(9,'Lia','Buba','ghghgght@sdgds.df', 0738633338),
    new User(10,'Igor','Kozel','sdsfsf@sdgds.df', 0987635286)
];
console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let filter1 =  users.filter(value => value.id % 2 === 0);
console.log(filter1);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort1 = users.sort((a, b) => a.id-b.id);
console.log(sort1)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client = [
    new Client(6,'Oksana','Nevolina','sdsfsf@sdgds.df', 0984568569 ,[ 'milk','ege','pizza']),
    new Client(2,'Anna','Nevolina','sdsdsdgurytrdsds@sdgds.df', 0632442352, [ 'milk']),
    new Client(4,'Olya','Kova','klj@sdgds.df', 0975248563, [ 'fish','milk',]),
    new Client(3,'Lola','Oppa','fgtrt@sdgds.df', 0967573678, [ 'milk','ege','fish','butter']),
    new Client(5,'Valik','Gad','sdsfskuyuyf@sdgds.df', 0957854132,[ 'butter','ege','butter','pasta','milk']),
    new Client(1,'Pavlo','Kin','hjhhff@sdgds.df', 0987576588,[ 'pasta ','ege','milk']),
    new Client(7,'Mia','Busya','56656hhj@sdgds.df', 0676968574,[ 'ege']),
    new Client(8,'Laaa','lol','yytrrrr@sdgds.df', 0934562496,[ 'pasta','ege','milk']),
    new Client(9,'Lia','Buba','ghghgght@sdgds.df', 0738633338,[ 'milk','ege','fish','butter']),
    new Client(10,'Igor','Kozel','sdsfsf@sdgds.df', 0987635286,[ 'milk','bread','milk','ege','fish','butter'])
]
console.log(client)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
let sort2 = client.sort((a, b) => a.order.length- b.order.length);
console.log(sort2);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
function Car( model, manufacturer, year,maximumsSpeed,engineCapacity ) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year  = year;
    this.maximumsSpeed = maximumsSpeed;
    this.engineCapacity = engineCapacity;
}
 let car = new Car('Volkswagen Tiguan','Volkswagen',2020,250,2.5);
console.log(car);
 Car.prototype.drive =  function(){
return `їдемо зі швидкістю ${this.maximumsSpeed}  кіломертів на годину`
}
console.log(car.drive())
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 Car.prototype.info =  function(){
    return `model: ${this.model}, 
             manufacturer: ${this.manufacturer} , 
             year:${ this.year}, 
             maxumsSpeed : ${this.maximumsSpeed} ,
             engineCapacity: ${this.engineCapacity} `
    }
    console.log(car.info());
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car.prototype.increaseMaxSpeed =  function(newSpeed){
    return this.maximumsSpeed =  this.maximumsSpeed + newSpeed
}
console.log(car.increaseMaxSpeed(50))

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear =  function(newValue){
    return     this.year =  newValue
}
console.log(car.changeYear(2023))

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver =  function(driver){
    return     this.driver =  driver;
}
console.log(car.addDriver({ name: 'Oksana', age:32, status: true}))

//     - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
class Car1{
    constructor(model, manufacturer, year, maximumsSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maximumsSpeed = maximumsSpeed;
        this.engineCapacity = engineCapacity;
    }
}

let car1 = new Car('Volkswagen Tiguan','Volkswagen',2020,250,2.5);
console.log(car1)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car1.drive =  function(){
    return `їдемо зі швидкістю ${this.maximumsSpeed}  кіломертів на годину`
}
console.log(car1.drive())
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car1.prototype.info =  function(){
    return `model: ${this.model}, 
             manufacturer: ${this.manufacturer} , 
             year:${ this.year}, 
             maxumsSpeed : ${this.maximumsSpeed} ,
             engineCapacity: ${this.engineCapacity} `
}

console.log(car1.info());
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car1.prototype.increaseMaxSpeed =  function(newSpeed){
    return this.maximumsSpeed =  this.maximumsSpeed + newSpeed
}
console.log(car1.increaseMaxSpeed(50))

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car1.prototype.changeYear =  function(newValue){
    return     this.year =  newValue
}
console.log(car1.changeYear(2023))

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car1.prototype.addDriver =  function(driver){
    return     this.driver =  driver;
}
console.log(car1.addDriver({ name: 'Oksana', age:32, status: true}))

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella('Valya',25, 36),
    new Cinderella('Juju',28, 38),
    new Cinderella('Anna',25, 36),
    new Cinderella('Lena',27, 37),
    new Cinderella('Oksana',26, 36),
    new Cinderella('Ilona',22, 35),
    new Cinderella('Iryna',32, 39),
    new Cinderella('Vlada',45, 34),
    new Cinderella('Dasha',52, 40),
    new Cinderella('Valentyna',74, 45)
]
console.log(cinderellas)


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella{

    constructor(name, age, footSize, theShoeThatHeFound) {
        super(name, age, footSize);
        this.theShoeThatHeFound = theShoeThatHeFound;
    }
}
let prince = new Prince('Vova',30, 43, 35)
console.log(prince)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let she = '';
for ( const cinderella of cinderellas ) {
    if (cinderella.footSize  ===  prince.theShoeThatHeFound) {
        she = cinderella;
    }
}
let xxx =  `${she.name} повинна бути з принцом. `
console.log(xxx)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

      let find = cinderellas.find(value => value.footSize === prince.theShoeThatHeFound);
      console.log(find);



