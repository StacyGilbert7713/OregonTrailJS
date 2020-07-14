class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt () {
    return this.food += 2
    }

    eat () {
        if (this.food > 0) {
            this.food --
        } else {
            this.isHealthy = false
        }
        return this
    }
}

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passenger = []
    }

    getAvailableSeatCount() {
        if (this.passenger.length <= 2) {
            return this.capacity - this.passenger.length
        } else {
            return 0
        }
    }

    join (traveler) {
        if (this.getAvailableSeatCount () == 0) {
           return 'no space left' 
        } else {
        return this.passenger.push (traveler)
        }
    }

    shouldQuarantine () {
        const sick = this.passenger.some (passenger =>
            passenger.isHealthy === false)
       return sick
    } 

    totalFood () {
        const food = this.passenger.map (traveler => traveler.food)
        let totalFood = 0
        for (let index = 0; index < food.length; index++) {
            totalFood = totalFood += food [index]
        }
        return totalFood
    }
}