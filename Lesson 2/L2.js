//- Створити масив, наповнити його 10 елементами будь-якого типу,вивести кожен елемент в консоль
let arr
arr = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]
console.log(arr)

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title:'The Terror',
    pageCount:784,
    genre:'Thriller'
}
let book2 = {
    title:'The Hound of the Baskervilles',
    pageCount:112,
    genre:'Detective'
}
let book3 = {
    title:'Defending Jacob',
    pageCount:464,
    genre:'Thriller'
}
console.log(book1, book2, book3)

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title:'The Terror',
    pageCount:784,
    genre:'Thriller',
    author: [{name:'Dan Simmons', age:59}]
}
let book5 = {
    title:'The Hound of the Baskervilles',
    pageCount:112,
    genre:'Detective',
    author: [{name:'Arthur Conan Doyle', age:42}]
}
let book6 = {
    title:'Defending Jacob',
    pageCount:464,
    genre:'Thriller',
    author: [{name:'William Scott Landay', age:49}]
}
console.log(book4, book5, book6)

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {id:123, name:'Belle', username:'B3ll3', email:'belle@gmail.com', password:'12345', age:32, country:'France', city:'Paris', hobby:'Football', status:'true'}
]
console.log(user)
console.log(user[0].password)

//- Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
let week = [
    {day:'Monday', morning:'+5', daytime:'+10', evening:'+7'},
    {day:'Tuesday', morning:'+3', daytime:'+12', evening:'+6'},
    {day:'Wednesday', morning:'+7', daytime:'+10', evening:'+8'},
    {day:'Thursday', morning:'+2', daytime:'+8', evening:'+5'},
    {day:'Friday', morning:'+9', daytime:'+14', evening:'+11'},
    {day:'Saturday', morning:'+8', daytime:'+12', evening:'+10'},
    {day:'Sunday', morning:'+10', daytime:'+15', evening:'+12'}
]
console.log(week)

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
let x = 25
if (x !== 0) {console.log(false)}
if (x === 0) {console.log(true)}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 25
if (time <=15) {console.log('first quarter')}
else if (time >15 && time <=30) {console.log('second quarter')}
else if (time >30 && time <=45) {console.log('third quarter')}
else if (time >45 && time <=59) {console.log('forth quarter')}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 1
if (day <=10) {console.log('first decade')}
else if (day >10 && day <=20) {console.log('second decade')}
else if (day >20 && day <=31) {console.log('third decade')}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = prompt('enter day')
switch (schedule) {
    case 'Monday':
        console.log('Work')
        break
    case 'Tuesday':
        console.log('Fitness')
        break
    case 'Wednesday':
        console.log('Friends birthday')
        break
    case 'Thursday':
        console.log('Running competitions')
        break
    case 'Friday':
        console.log('House cleaning')
        break
    case 'Saturday':
        console.log('Buying a car')
        break
    case 'Sunday':
        console.log('Shopping')
        break
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = 1
let b = 2
if (a > b) {console.log(a)}
else if (a < b) {console.log(b)}
else if (a === b) {console.log('=')}

//- Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y = null
if (y === 0 || y === null || y === undefined || y === NaN || y === false || y === '') {console.log('default')}

//#awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {console.log('super')}
if (coursesAndDurationArray[1].monthDuration > 5) {console.log('super')}
if (coursesAndDurationArray[2].monthDuration > 5) {console.log('super')}
if (coursesAndDurationArray[3].monthDuration > 5) {console.log('super')}
if (coursesAndDurationArray[4].monthDuration > 5) {console.log('super')}
if (coursesAndDurationArray[5].monthDuration > 5) {console.log('super')}
