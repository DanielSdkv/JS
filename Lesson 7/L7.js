//#XjJuucOMR0
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
let users = [
    new User (1, 'aaaa', 'bbbb', 'a@b', '1111111'),
    new User (2, 'cccc', 'dddd', 'c@d', '2222222'),
    new User (3, 'eeee', 'ffff', 'e@f', '3333333'),
    new User (4, 'gggg', 'hhhh', 'g@h', '4444444'),
    new User (5, 'iiii', 'jjjj', 'i@j', '5555555'),
    new User (6, 'kkkk', 'llll', 'k@l', '6666666'),
    new User (7, 'mmmm', 'nnnn', 'm@n', '7777777'),
    new User (8, 'oooo', 'pppp', 'o@p', '8888888'),
    new User (9, 'qqqq', 'rrrr', 'q@r', '9999999'),
    new User (10, 'ssss', 'tttt', 's@t', '1010101')
]
console.log(users)

//#2ikXsE2WiKZ
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));

//#pOeHKct
// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => {return a.id - b.id}));

//#nkMXISv
//- створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
function Client (id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
}

let clients = [
    new Client (1, 'aaaa', 'bbbb', 'a@b', '1111111', ['garlic','tomato']),
    new Client (2, 'cccc', 'dddd', 'c@d', '2222222', ['meat']),
    new Client (3, 'eeee', 'ffff', 'e@f', '3333333', ['fish','shrimp','onion']),
    new Client (4, 'gggg', 'hhhh', 'g@h', '4444444', ['car']),
    new Client (5, 'iiii', 'jjjj', 'i@j', '5555555', ['gloves','jacket', 'coat']),
    new Client (6, 'kkkk', 'llll', 'k@l', '6666666', ['gum','candy']),
    new Client (7, 'mmmm', 'nnnn', 'm@n', '7777777', ['potato']),
    new Client (8, 'oooo', 'pppp', 'o@p', '8888888', ['carrot']),
    new Client (9, 'qqqq', 'rrrr', 'q@r', '9999999', ['TV','fridge']),
    new Client (10, 'ssss', 'tttt', 's@t', '1010101', ['PC','PS'])
]
console.log(clients)

//#8abtVjRv
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => {return b.order.length - a.order.length}));

/*#vV9a6584I5
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car */
function Car (model, manufacturer, year, maxSpeed, engine) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key])
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
    }
    this.changeYear = function (newYear) {
        this.year = newYear
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

const car = new Car ('Toyota Prius', 'Toyota Motors', 2016, 180, 'some engine')
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(20)
car.changeYear(2018)
car.addDriver({})
console.log(car)

//#5kla3yMpgp
//- (Те саме, тільки через клас)
class Car1 {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info () {
        for (const key in this) {
            console.log(key, this[key])
        }
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
    }
    changeYear = function (newYear) {
        this.year = newYear
    }
    addDriver = function (driver) {
        this.driver = driver
    }
}
const car1 = new Car1 ('Toyota Prius', 'Toyota Motors', 2016, 180, 'some engine')
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(20)
car1.changeYear(2018)
car1.addDriver({})
console.log(car1)

/*#zg6Fifnqig
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class Cinderella{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
let cinderellas = [
    new Cinderella ('Kate', 22, 36),
    new Cinderella ('Olivia', 22, 36),
    new Cinderella ('Emma', 23, 36.5),
    new Cinderella ('Charlotte', 23, 36.5),
    new Cinderella ('Amelia', 24, 37),
    new Cinderella ('Sophia', 24, 38),
    new Cinderella ('Mia', 25, 38),
    new Cinderella ('Isabella', 25, 39),
    new Cinderella ('Ava', 26, 39),
    new Cinderella ('Violet', 26, 40),
]

class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
let prince = new Prince('Peter', 25, 37)

for (const cinderella of cinderellas ) {
    if (cinderella.slipper === prince.slipper)
    console.log('Happy End')
}

console.log(cinderellas.find(cinderella => cinderella.slipper === prince.slipper));


//#gsKLAsNWM
//*Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    const array = this
    for (const item of array) {
        callback(item)
    }
};
[1,2,3].myForEach((x) => console.log(x))

Array.prototype.myFilter = function (callback) {
    const arr = []
    for (const item of this) {
        if (callback(item)) {
            arr.push(item)
        }
    }
    return arr
}

let users1 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users1.myFilter((user) => user.status));
