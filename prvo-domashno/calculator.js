const num1 = 10
const num2 = 4
const operation = "/"

switch (operation) {
    case "+": {
        console.log(num1 + num2)
        break
    }
    case "-": {
        console.log(num1 - num2)
        break
    }
    case "*": {
        console.log(num1 * num2)
        break
    }
    case "/": { 
        if(num2 != 0)
        console.log(num1 / num2)
        else console.log("Error")
        break
    }
    case "%": {
        console.log(num1 % num2)
        break
    }
    default: {
        console.log("Invalid")
    }
}