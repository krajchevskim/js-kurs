// uslovni komandi
// if (/*uslov-logicki iskaz */) {
//     /*
//     komanda 1;
//     komanda2; etc
//     kodot sto treba da se izvrsi*/}

// logicki operatori za sporedba <, >, >=, =<, ==(<-- ova e za sporeduvanje dali e ednakvo nesto), !=(<--ova e za sporeduvanje dali e razlicno nesto), ===, !==

// bolean type  = true/false

const a = 1, b = 2;

// 1.ako uslovot e ispolnet 
if (a < b) {
    console.log("A e pomalo od B")
}

//ako uslovot ne e ispolnet
if (!a < b) {
    console.log("A e ednakvo ili pogolemo od B")
}


//2.ako uslovot e ispolnet
if (a < b) {
    console.log("A e pomalo od B")
} else {
    console.log("A e pogolemo ili ednakvo od B")
}


const broj1 = 10, broj2 = 5;

if(broj1 > broj2) {
    console.log(broj1 + " e pogolem od " + broj2)
} else if (broj1 < broj2) {
    console.log(broj1 + " e pomal od " + broj2)
} else {
    console.log(broj1 + " e ednakov na " + broj2)
}


if ("Ana" === "Ana") {
    console.log("Iminjata se isti")
} else {
    console.log("Iminjata ne se isti")
}


// // one-liner - ternaren operator za sporedba
// console.log(broj1 == broj2 ? "broevite se ednakvi" : "edniot broj e pogolem/pomal od drugiot")

const water = 10;
const coffee = 5;

// logicki OR - ILI operator 
if(water < 20 || coffee < 10) {
// ovoj blok na kod se izvrsuva dokolku e ispolnet barem eden od uslovite
    console.log("Error")
}

//logicki and - i operator
if (water > 20 && coffee > 10) {
    //ovoj blok na kod se izvrsuva dokolku site uslovi se ispolneti
    console.log("Moze da napravime kafe")
}


// switch-case struktura/statement

const animal = "horse"

switch (animal) {
     case "parrot": {
         console.log("This animal can sing!")
         break
     }

     case "dog": {
        console.log("This animal can dig!")
        break
     }

     case "cat": {
        console.log("this animal can purr!")
        break
     }
     default: {
        console.log("unknown animal")
     }
 }

