class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    print(){
        console.log('Firstname: ' + this.firstname + ', Lastname: ' + this.lastname);
    }
}

module.exports = Person;