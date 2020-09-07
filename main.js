class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        return this.food += 2
    }

    eat() {
        if (this.food > 0) {
            this.food--
        } else {
            this.isHealthy = false
        }
        return this
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passenger = []
    }

    getAvailableSeatCount() {
        return (this.capacity - this.passenger.length)
    }

    join(traveler) {
        if (this.getAvailableSeatCount() == 0) {
            return 'Wagon is full.'
        } else {
            return this.passenger.push(traveler)
        }
    }

    shouldQuarantine() {
        const sick = this.passenger.some(passenger =>
            passenger.isHealthy === false)
        return sick
    }

  totalFood() {
        const food = this.passenger.map(traveler => traveler.food)
        let totalFood = food.reduce((a, b) => a + b, 0)
    
        return totalFood
    }
}
