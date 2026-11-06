function showFullName(){
    console.log(`${this.first} ${this.last}`)
}

const fullName = {first :"Parvej" , last:'Sd'} 
showFullName.call(fullName)