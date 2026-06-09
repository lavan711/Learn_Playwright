// Object Destructuring

const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring - 
// Destructuring allows us to extract values from objects and assign them to variables in a concise way.
const { name1, age } = user;
console.log(name1);
console.log(age);

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// destructuring
const user = { name1: "John", age: 30, city: "NYC" };
const { age } = user;
console.log(age); // 30
// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user); // { name1: 'John', age: 30, city: 'NYC' } - the original object remains unchanged

// Nested destructuring
const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data; 
console.log(city); // NYC - we are extracting the city property from the nested address object within the user object using destructuring.