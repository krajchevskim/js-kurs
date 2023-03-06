// OOP - object-oriented programming
// Pascal - case naming style, prvata bukva e golema kaj klasi

// class name declaration
class Person {   
    // class body

    // object properties (fields) - variables
    // object functions (methods) - functions

    // fields are not mandatory

    name;
    #age; //private property se obelezuva so #
    #gender;
    static maxAge = 120;

    // konstruktorot instancira objekt od tip Person
    constructor(name, age, gender) {
        this.name = name;
        this.#age = age;
        this.#gender = gender;
    }

    getAge() {
        return this.#age // 20   ovaa funkcija isto moze da bide i get age() {return this.#age}
    }

    setAge(newAge) {
        this.#age = newAge;
    }

    #validateAge(newAge) {
        if (newAge > Person.maxAge) {
            console.error('Unsupported value!')
            return false
        }
        return true
    }
}

const Object1 = {name: 'Mario', age:27, gender: 'male'} // ova e ustvari objekt koj povikuva klasa

const Person1 = new Person('Aleksandar', 20, 'male') // ova e instanciranje t.e. kreiranje na nov objekt od tip Person

console.log(Object1, Person1)

Person1.setAge = 50

console.log(Person1.setAge)

console.log(Person.maxAge)


// da se definira klasa avtomobil kojasto ke sodrzi podatoci t e fields za model, boja, godina, max speed i momentalna brzina
// treba da se definira metodi t e funkcii za ubrzuvanje i usporuvanje na voziloto. kako parametar metodite primaat brojka za kolku voziloto treba da se ubrza ili za kolku da se uspori. koga ke stigneme do max speed ne treba da se zgolemuva, treba da se ispecati deka e postignata i treba da go sprecime voziloto da ne se ubrzuva poveke. koga ke stigneme do nula ako namaluvame treba da ispecatime deka voziloto stoi i ne treba poveke da se namaluva brzinata.

class Car {
    model;
    color;
    year;
    maxSpeed;
    currentSpeed;
    
    constructor(model, color, year, maxSpeed, currentSpeed) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = currentSpeed;
    }

    accelerate(speed) {
        if (this.currentSpeed + speed >= this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
            console.log('max speed reached')
            return
        }

        this.currentSpeed += speed;
    }

    decelerate(speed) {
        if (this.currentSpeed - speed <= 0) {
            this.currentSpeed = this.maxSpeed;
            console.log('vehicle has stopped')
            return
        } 

        this.currentSpeed -= speed;
    }
}

const Audi = new Car('Audi', 'white', 2010, 200, 100)
const Toyota = new Car('Toyota', 'black', 2005, 180, 70)
console.log(Audi, Toyota)

Audi.accelerate(20)
Audi.accelerate(20)
Audi.accelerate(20)
Audi.accelerate(20)
Audi.accelerate(20)
Audi.accelerate(20)

console.log(Audi.currentSpeed)