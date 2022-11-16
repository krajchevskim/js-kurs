// // prva zadaca

// // vtora zadaca
// const numbers = [2, 5, 1, 3, 9, 6]

// if (!numbers.length) {
//     console.log('List is empty')
// } else {
// //     let min = numbers[0]
// //     let max = numbers[0]

// // for (const num of numbers) {
// //     if (num > min) {
// //         min = num
// //     } else if (num > max) {
// //         max = num
// //     }
// // }

// // console.log(min, max) //???????????????????????

// console.log(math.min(...numbers), math.max(...numbers))  // [1, 2, 3] ==> 1, 2, 3 - spread operator/ deconstructing operator

// Math.min()
// Math.max()
// }


//treta zadaca

const duplicates = [1, 1, 3, 5, 6, 6, 6, 7]

for (let i = 0; i < duplicates.length; i++) {
    if (duplicates.indexOf(duplicates[i]) !== i) {
        console.log('Ima duplikati')
    }
}
// ima i drug nacin toa kaj kocho na git pokasno


// petta zadaca

const complex = [1, 2, [3, 4], 5, 6]
const flat = []
const subArrays = []

for (const el of complex) {
    if (!Array.isArray(el)) {
        flat.push(el)
    } else {
        subArrays.push(...el)
    }
}

flat.push(...subArrays)

console.log (flat)
