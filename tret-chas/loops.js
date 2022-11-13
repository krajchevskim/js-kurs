// while (uslov) {
// //     // blok od kod 
// // komanda 1
// // komanda 2
// // } tuka celo vreme koga ke gi pomine site komandi se vrakja pak i gi izvrsuva se dodeka uslovot e ispolnet
// // ako uslovot ne e ispolnet nema nisto da izvrsi
// }

// do () {
// // komanda 1
// // komanda 2
// // komanda 3
// } while (uslov) // <-- ova prvo go izvrsuva toa sto e vo do pa posle ako uslovot e ok pak povtoruva

let number = 1; 

// while (10000 >= number) {
//     console.log(number)
//     number = number + 1 // ova moze da se napise skrateno "number +=1" ili "number++" i ova treba da e vnatre vo ciklusot pred zatvorenata zagrada
// }


while (10 >= number) {
    console.log(number)
    number++
}

const pets = ['Cat', 'Dog', 'Rabbit', 'Parrot']

let i = 0;
while (i < pets.length) {
    console.log(pets[i])
    i++
} // uslov tuka ke bide dolzinata na nizata t.e. so neshto.length i++ = i = i + 1 ili i +=1

for(let i = 0; i < pets.length; i++) {
    console.log(pets[i])
}

for(let i = pets.length - 1; i >= 0; i--) {
    console.log(pets[i])
}

for (let pet of pets.reverse()) {
    console.log(pet)
}

