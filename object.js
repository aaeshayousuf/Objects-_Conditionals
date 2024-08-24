const me ={
    firstName: 'Harry',
    lastName: 'Smith',
    age: 34,
    email: 'smith@gmail.com',

    addressBook:{
        contacts:[],
        addContact(mycontact) {
            this.contacts.push(mycontact)
        },
        findContact(fullName) {
            let contactInfo;
            for (let i = 0; i < this.contacts.length; i++){
                let currentFullname = this.contacts[i].fullName();
                if (currentFullname === fullName){
                    contactInfo = this.contacts[i];
                    break;
                }
            }
            return contactInfo || "Contact not found";
        },
        
    },

    fullName() {
        return this.firstName + ' ' + this.lastName
    },
    birthday() {
        this.age++;
        console.log(`Happy Birthday, ${this.firstName}! You are now ${this.age} years old.`)
    }
}

const contact1 ={
    firstName: 'Azeezah',
    lastName: 'Abdullah',
    age: 30,
    email: 'azeezah@gmail.com',

    addressBook:{
        contacts:[],
        addContact(mycontact) {
            this.contacts.push(mycontact);
        },
        findContact(fullName) {
            let contactInfo;
            for (let i = 0; i < this.contacts.length; i++){
                let currentFullname = this.contacts[i].fullName();
                if (currentFullname === fullName){
                    contactInfo = this.contacts[i];
                    break;
                }
            }
            return contactInfo || "Contact not found";
        }
    },

    fullName() {
        return this.firstName + ' ' + this.lastName
    },
    birthday() {
        this.age++;
        console.log(`Happy Birthday, ${this.firstName}! You are now ${this.age} years old.`)
    }
}

const contact2 ={
    firstName: 'Kawthar',
    lastName: 'Imam',
    age: 29,
    email: 'kawthar@gmail.com',

    addressBook:{
        contacts:[],
        addContact(mycontact) {
            this.contacts.push(mycontact);
        },
        findContact(fullName) {
            let contactInfo;
            for (let i = 0; i < this.contacts.length; i++){
                let currentFullname = this.contacts[i].fullName();
                if (currentFullname === fullName){
                    contactInfo = this.contacts[i];
                    break;
                }
            }
            return contactInfo || "Contact not found";
        }
    },

    fullName() {
        return this.firstName + ' ' + this.lastName
    },
    birthday() {
        this.age++;
        console.log(`Happy Birthday, ${this.firstName}! You are now ${this.age} years old.`)
    }
}
const contact3 ={
    firstName: 'Maryam',
    lastName: 'Adejumo',
    age: 27,
    email: 'maryam@gmail.com',

    addressBook:{
        contacts:[],
        addContact(mycontact) {
            this.contacts.push(mycontact);
        },
        findContact(fullName) {
            let contactInfo;
            for (let i = 0; i < this.contacts.length; i++){
                let currentFullname = this.contacts[i].fullName();
                if (currentFullname === fullName){
                    contactInfo = this.contacts[i];
                    break;
                }
            }
            return contactInfo || "Contact not found";
        }
    },

    fullName() {
        return this.firstName + ' ' + this.lastName
    },
    birthday() {
        this.age++;
        console.log(`Happy Birthday, ${this.firstName}! You are now ${this.age} years old.`)
    }
}

me.addressBook.addContact(contact1)
me.addressBook.addContact(contact2)
me.addressBook.addContact(contact3)
console.log(me.addressBook.contacts)

const foundContact = me.addressBook.findContact('Azeezah')


console.log(foundContact)

console.log(contact1.fullName())
console.log(contact2.fullName())
console.log(contact3.fullName())

contact1.birthday();
contact1.birthday();