function intro(age,city){
    console.log(`${this.name}, ${age}, ${city}`)

}

const person = {name:'Sidharth'}
intro.call(person,24,'Latur')