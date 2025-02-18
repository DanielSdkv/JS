// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 =  'hello world'
console.log(str1.length)
let str2 =  'lorem ipsum'
console.log(str2.length)
let str3 =  'javascript is cool'
console.log(str3.length)

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 =  'HELLO WORLD'
console.log(str4.toLowerCase())
let str5 =  'LOREM IPSUM'
console.log(str5.toLowerCase())
let str6 =  'JAVASCRIPT IS COOL'
console.log(str6.toLowerCase())

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str7 = ' dirty string   '
console.log(str7.substring(1,13))

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) {
    const split = str.split(' ')
    return split
}
console.log(stringToArray('Ревуть воли як ясла повні'))

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0]
let string = numbers.map(value => value + '')
console.log(string)

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function SortNums(array,direction) {
    if (direction === 'ascending') return array.sort((a, b) => a - b)
    if (direction === 'descending') return array.sort((a, b) => b - a)
}
console.log(SortNums([11, 21, 3], 'ascending'));
console.log(SortNums([11, 21, 3], 'descending'));

//#yo06d74c1C
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let sort = coursesAndDurationArray.sort((a,b) => {return b.monthDuration - a.monthDuration})
console.log(sort)
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filter)
let map = coursesAndDurationArray.map((value, index) => {
    value.id = index+1
    return value
})
console.log(map)

/*#bolvdlhP
описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
-всі трефи від 9 та більше
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king'
    color:'', // 'red','black'
}
 */
let suits = ['spade', 'diamond','heart', 'club']
let values = ['6','7','8','9','10','ace','jack','queen','king']

let cards = []
for (const suit of suits) {
    for (const value of values) {
        const card = { cardSuit: suit, value: value}
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red'
        }
        else {
            card.color = 'black'
        }
        cards.push(card)
    }
}
console.log(cards)

console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value === '9' || card.value === '10' || card.value === 'ace' || card.value === 'jack' || card.value === 'queen' || card.value === 'king')));

/* #EP5I1UUzAX
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}
 */
let reduce = cards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card)
            break
        case 'diamond':
            acc.diamonds.push(card)
            break
        case 'heart':
            acc.hearts.push(card)
            break
        case 'club':
            acc.clubs.push(card)
            break
    }
    return acc
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduce)

//#4LJn7zBx
//взяти з arrays.js масив coursesArray
//--написати пошук всіх об'єктів, в яких в modules є sass
//--написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass')
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker')
}));

