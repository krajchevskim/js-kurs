// niza od broevi kojasto vi ja prikazuva prosecnata temperatura za sekoj den od nedelata 
// treba da se napise programa kojasto ke ja presmeta prosecnata temp za cela nedela

const temperatures = [15, 16, 17, 20, 15, 20, 21]


let sum = 0
for(const temp of temperatures) {
    sum = sum + temp
}
console.log(sum / temperatures.length)

// da se ispecati sekoj vtor element od proizvolna niza 

const pets = ['Cat', 'Dog', 'Rabbit', 'Parrot', 'Horse', 'Goat']

for(let i = 1; i < pets.length; i+=2) {
    console.log(pets[i])
}

for(let i = 0; i < pets.length; i++) {
    if (i % 2 !== 0)
    console.log(pets[i])
}


// imame niza od random vrednosti i megju niv ima i nevalidni vrednosti (null, undefined, NaN). Treba da se napise programa kojasto ke gi isfiltrira nevalidnite vrednosti i ke kreira nova niza od samo onie elementi koi se validni. novata validna niza treba da se ispecati

// output = nova niza koja sto ke gi ima samo validnite vrednosti 1 2 username 6 password

const validity = [1, 2, null, 'Username', undefined, 6, 'Password', NaN]

const valid = []

for(const el of validity) {
    if (el) valid.push(el)
}
console.log(valid)


// for( i = 0; i <validity.length; i = i++) {
//     if (validity[i]) valid.push(validity[i])
// }

// console.log(valid)

validity.forEach((el, i)=> {
    if (el) valid.push(el)
})

console.log(valid)