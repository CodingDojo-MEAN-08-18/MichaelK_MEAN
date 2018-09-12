class Bike {
    price: number;
    max_speed: string;
    miles: number;

    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo = () => {
        return console.log("Price is $" + this.price + ", max speed is " + this.max_speed + ", miles is " + this.miles);
    }
    ride = () => {
        this.miles = this.miles + 10;
        console.log("Riding...");
        return this;
    }
    reverse = () => {
    	//so that miles cannot be lower than 5.
        if (this.miles >= 5) {
            this.miles = this.miles - 5;
        }
        console.log("Reversing...");
        return this;
    }
}

let redBike = new Bike(350, "75mph");
redBike.ride().ride().ride().reverse().displayInfo()

let blueBike = new Bike(500, "95mph");
blueBike.ride().ride().reverse().rever().displayInfo()

let goldBike = new Bike(900, "150mph");
goldBike.reverse().reverse().reverse().displayInfo()