class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setName(name) {
    let result = name.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const eni = new Person("eni", "enawan");

console.log(eni.getFullName());
eni.setName("Eka Yani");
console.log(eni);
