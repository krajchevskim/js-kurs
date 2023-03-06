class CoffeeMaker {
    MIN_COFFEE = 7
    MIN_WATER = 100
    MIN_MILK = 10
    total = 0

    coffee
    water 
    milk 

    constructor(coffee, water, milk) {
        this.coffee = coffee
        this.water = water 
        this.milk = milk 
    }

    makeCoffee() {
        if (this.coffee < this.MIN_COFFEE){
        console.log('Need more coffee')
        return
        }
        if (this.coffee < this.MIN_WATER){
            console.log('Need more water')
            return
    }
    if (this.coffee < this.MIN_MILK){
        console.log('Need more milk')
        return
    }
    this.coffee -= this.MIN_COFFEE
    this.water -= this.MIN_WATER
    this.milk -= this.MIN_MILK
    this.total++


    console.log('Coffee ready')
    }
}

const Machine = new CoffeeMaker(100, 1000, 1000)

Machine.makeCoffee()
console.log(Machine.total)



function calculateAverage (a, b) {
    try {
        const average = 0;
        average = ( a + b ) / 2
        return average
    } catch (error) {
        throw (error)
    } finally {
        // ova se izvrsuva bez razlika dali imalo greska ili ne
        return 0 
    }
} 

console.log(calculateAverage(5, 10))