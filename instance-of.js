class Employee {}
class Manager extends Employee {}

const budi = new Manager();

console.log(ari instanceof Manager); // true

// True, krn Manager extends Employee
console.log(ari instanceof Employee); // true
