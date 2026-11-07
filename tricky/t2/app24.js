const car = {
    brand : 'Toyota',
    show(){
        console.log(this.brand)
    }
}

const bike = {brand:'Yamha'}
car.show.call(bike)