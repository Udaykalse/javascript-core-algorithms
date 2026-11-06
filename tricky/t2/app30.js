function sayHi(){
    console.log(`Hi from ${this.role}`);
}

sayHi.call({role:'Admin'})
sayHi.call({role:'user'})
