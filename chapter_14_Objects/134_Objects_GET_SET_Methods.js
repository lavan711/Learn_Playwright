// Objects - Getters and Setters
// Getters and Setters are special methods that allow us to define how to access and modify the properties of an object. 
// They provide a way to control the access to the properties of an object and to perform additional logic when getting or setting a property.  
const user = {
    firstName: "Lavanya",
    lastName: "Balasubramanian",
    get fullName() {
        return this.firstName + this.lastName;
    },
    
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}
console.log(user.fullName); // LavanyaBalasubramanian - we are accessing the fullName property of the user object, which is defined as a getter method that concatenates the firstName and lastName properties of the user object and returns the full name as a string.

// Objects - JS {}
// this. it means current value in the Object.

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName); // Amit Sharma - we are setting the fullName property of the user object to "Amit Sharma", which triggers the setter method that splits the value into firstName and lastName and assigns them to the respective properties of the user object. Then, when we access the fullName property again, it returns the updated full name as a string.


