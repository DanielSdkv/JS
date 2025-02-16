//Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій

//#I2XsG6f
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sqaure = (a, b) => a * b
console.log(sqaure(5, 10))

//#ETGAxbEn8l
//- створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => 3.14 * r**2
console.log(circle(2))

//#Mbiz5K4yFe7
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (r,h) => 2 * 3.14 * r * (r+h)
console.log(cylinder(2,6))

//#SIdMd0hQ
//- створити функцію яка приймає масив та виводить кожен його елемент
let userArray = (users) => {
    for (const user of users) {
        console.log(user)
    }
}
let users = [
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
userArray(users)

//#59g0IsA
//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let paragraph = (text) => {
    const p = `<p>${text}</p>`
    document.write(p)
}
paragraph('blablablabla')

//#hOL6126
//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let foobar = (list) => {
    document.write(`<ul>`)
    {
        document.write(`<li>${list}</li>`)
        document.write(`<li>${list}</li>`)
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`)
}
foobar('Hello')

//#0Kxco1edSN
//- створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
let liLoop = (list, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${list}</li>`)
    }
    document.write(`<ul>`)
}
liLoop('hi', 4)

//#gEFoxMMO
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let simpleArray = (list) => {
    document.write(`<ul>`)
    for (const listElement of list) {
        document.write(`<li>${listElement}</li>`)
    }
    document.write(`<ul>`)
}
simpleArray([1, 'hi', false])

//#bovDJDTIjt
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objectArray = (object) => {
    for (const objectElement of object) {
        document.write(`<div>${objectElement.name1} ${objectElement.age} ${objectElement.id}</div>`)
    }
}
objectArray([{name1:'Stas', age: 25, id: 1234}])

//#pghbnSB
//- створити функцію яка повертає найменьше число з масиву
let minValue = (numbers) => {
    let min = numbers[0]
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    console.log(min)
    return min
}
minValue([5, 7, 12, 15, 20])

//#EKRNVPM
//- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let result = 0
    for (const arrElement of arr) {
        result = result + arrElement
    }
    console.log(result)
    return result
}
sum([1,2,3,4,5])

//#kpsbSQCt2Lf
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let box = arr[index1]
    arr[index1] = arr [index2]
    arr[index2] = box
    return arr
}
console.log(swap([11,22,33,44],0,1))

//#mkGDenYnNjn
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let pickedCurrency
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            pickedCurrency = item
        }
    }
    let result = sumUAH/pickedCurrency.value
    return result
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))