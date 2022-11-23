// let person = {
//     // properties
//     // key - value pairs
//     gender: 'male',
//     age: 30,
//     height: 170,
//     weight: null,
//     eat: () => {console.log(`${this.name}I ate an apple`)}  // anonimna funkcija moze da se pise i kao () => {}, namesto function () {}
// }

// console.log(person)

// // let person2 = {
// //     gender: 'female',
// //     age: 20,
// //     height: 180,
// //     weight: null,
// //     eat: function () {console.log('I ate an apple')}  // anonimna funkcija moze da se pise i kao () => {}, namesto function () {}
// // }


// // console.log(person)
// // // person.gender = 'female'    vaka se menuva vrednost na property u objektot
// // // delete person.gender    za da go izbrise celosno gender od gore
// // console.log(person.gender)
// // console.log(person['gender'])

// // console.log(person2)

// // person = person2; // ova ne e dobro poso koa ke go smenis person2 ke se smeni i person

// // person2.weight = 100

// // console.log(person)

// let person2 = {...person} // ova e spread syntax t.e. desctructor? poso go rusi objektot i site properties gi zema edno po edno. Objekt vo objekt ne kopira
// // let person2 = Object.assign({}, person)
// person2.age = 20;
// person2.gender = 'female'
// console.log(person2)

let person = {
  // properties
  // key - value pairs
  name: "Kocho",
  age: 30,
  gender: 'male',
  height: 170,
  weight: null,
  eat: () => { console.log(`${person.name} ate an apple`) }
}


console.log(person)

person.gender = 'female'
delete person.gender
console.log(person)
console.log(person['gender'])

// spread syntax // destructor
let person2 = Object.assign({profession: 'programmer'}, person)
let person3 = {
  ...person,
  profession: 'accountant',
  age: 40
}

person2.age = 20;
person2.gender = 'female';
person2.eat();

console.log(person2)
console.log(person3)