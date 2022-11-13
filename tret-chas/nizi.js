// nizi i ciklicno izvrsuvanje na kod 
// arrays and loops 

const string = "string"
const number = 1
const test = null // undefined
const bool = true // false

// nizi se nekolku primitivni tipovi spoeni vo edno


const array = []; // empty array - prazna niza 

const pets = ['Cat', 'Dog', 'Rabbit', 'Parrot'] // array declaration - deklariranje na niza
// indeksi za ovie elemnti pogore: prviot ima index=0 i posle odat nagore odnosno ovie 4 imaat 0, 1, 2, 3
//kolku elementi ima nizata posledniot index e sekogas n-1 ako ima 100 elementi posledniot e so index=99

console.log(pets) // go pecati celiot array t e niza kao mnozestvo, site zaedno u red

console.log(pets[1]) // ova treba da e dog 
console.log(pets[0]) // cat

pets[0] = 'Fish' // vaka se menuva elementot 
//najdobro e da se deklariraat nizite so const za da ne mozes po greska da gi smenis kao na primer pets = 'neshto' i da se smeni vo string dokolku e na primer let
console.log(pets[0])  // sega index=0 e fish namesto cat

pets[4] = 'Cat' // vaka se dodava element vo nizata

// pets[10] = 'Horse' // vaka site sto se izmegju 4 i 10 kje bidat empty elementi vo nizata TREBA DA SE IZBEGNVA OVA ZA DA NEMA PRAZNI ELEMENTI!

const temporary = pets[0]
pets[0] = pets[4]
pets[4] = temporary
console.log(pets)

pets.push('Goat') // sekogas dodava element na kraj od nizata sto e pred tockata
pets.unshift('Sheep') // sekogas dodava element na pocetok na nizata
pets.pop() //brise element od krajot na nizata
const deletedElement = pets.shift() // brise element od pocetok na nizata
// za da ne se izbrise ne sakajkji moze da se zacuvaat ovie pop i shift kako promenlivi(const) i posle prais push so imeto na promenlivata
pets.push(deletedElement) // <-- vaka se vrakja elementot

console.log(pets)

const length = pets.length // vaka se gleda kolku elementi ima vo nizata, pred tockata e imeto na nizata

const newArray = [1, 2, 3, 'Ana', true, [4, 7] ]
console.log(newArray[5])
console.log(newArray[5][1]) // vaka se pecati 7cata poso e vo new array, nizata e so index 5 i 1 znaci deka e index 1 7cata vo taa niza


// moze da ima niza so razlicni elementi i moze da ima niza vo niza