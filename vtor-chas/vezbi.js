const broj = 1

if (broj % 2) {
    console.log("brojot e paren")
} else {
    console.log("brojot e neparen")
}


const vozrast = 30

// if (vozrast >= 21 && vozrast >= 16 && vozrast >= 18) {
//     console.log("covekot gi ispolnuva site tri uslovi")
// }

if (vozrast >= 21) {
    console.log("covekot gi ispolnuva site tri uslovi")
} else if (vozrast >= 18) {
    console.log("covekot moze da glasa i vozi")
} else if (vozrast >= 16) {
    console.log("covekot moze da vozi")
}

const vreme = 17

if (vreme >=1 && vreme <12) {
    console.log("dobro utro")
} else if(vreme >=12 && vreme <18) {
    console.log("dobar den")
} else if (vreme >=18 ) {
    console.log("dobra vecer")
}




const month = 7

if (month <= 12) {
switch (month) {
    case 2: {
        console.log("28 days")
        break
    } 
    case 4:
    case 6:
    case 9:
    case 11: {
        console.log("30 days")
        break
    }
    default: {
        console.log("31 days")
        break
    }
}
} else {
    console.log("Month is invalid")
}