// treba da se kreiraat dve klasi - edna za shopping cart koja sto ke sodrzi niza od produkti i maksimalen budzet (brojka) i klasa za produkt koja sto ke sodrzi ime na produktot i negova cena
// programata treba da ovozmozi kreiranje na produkti i nivno dodavanje vo shopping cart
// sekoj pat koga ke se dodade produkt vo shopping cart treba da se presmeta dali imame dovolno pari za da kupime se sto e dodadeno vo shopping cartot
// isto taka treba da imame i mehanizam za brisenje na produkt od shopping cart. produkt se brise spored negovoto ime. 

class Product {
    name;
    price; 

    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class ShoppingCart {
   #products;
   #budget;
    
    constructor(products, budget) {
    this.#products
    this.#budget = budget
    }

    addProduct(newProduct) {
        this.#products = {...this.#products, newProduct}

    }
}

const Cart = new ShoppingCart([], 1000)



