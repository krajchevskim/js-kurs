//function declaration e samoto ime posle function
function myFirstFunction(greeting, name) {
    // code executed by the function  t.e. function body
    console.log(greeting + name)

    //return value
    return
}

//function call / function invocation - vaka se povikuva funkcijata
myFirstFunction('Hello ', 'Kocho')


function sum(num1, num2) {
    const result = num1 + num2
    return result
}

const result = sum(4, 5) 

// so var ne moze da se dade i nadvor i vnatre od funkcija promenliva, samo so let i const

console.log(result)


const string = ['z', 'd', 'r', 'a', 'v', 'o']
let text = ''
text = string.join('')

console.log(text)

//da se napise funkcija koja kako parametar dobiva ime vo tekstualen format (string)
//i gi vrakja  (return) inicijalite od zadadenoto ime
// John Ronald Reuel Tolkien => JRRT

function getInitials(name) {
    let initials = ''
    const nameArray = name.split(' ')
    for (const word of nameArray) {
        initials += word.charAt(0)
    }
    return initials
}

console.log(getInitials('John Ronald Reuel Tolkien'))

//da se napise funkcija koja sto kako parametar prima temperatura (brojce) vo farenhajtovi stepeni i treba da ja vrati vo nejzinata vrednost vo celzius formulata za konverzija e 
// 100 => 38 1C = (1F - 32) * 5 / 9

function convertFarenheitToCelsius(fahrenheit) {
    return celsius = (fahrenheit - 32)*5 / 9
}

console.log(convertFarenheitToCelsius(100))

//da se napise funkcija koja sto ke konvertira utc datum vo sledniot format 'DD/MM/YYYY'

// const date = new Date() // ova vrakja datum vo UTC timestamp
// const month = date.getMonth() // 11 vrakja mesec
// date.getFullYear() // 2022 vrakja godina 
// date.getDay() // 14 vrakja broj do 31 zavisi koj datum
// date.getHours() // 21 vrakja saati
// date.getMinutes() //  45 vrakja minuti
// // 14/11/2022 - 21:45

function convertDate () {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${day}/${month}/${year} - ${hours}:${minutes}`         // sve so e vnatre u zagradite ke bide promenliva, a nadvor string
}
console.log(convertDate)




