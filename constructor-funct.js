// Parameter di constructor funct
function Person(name, email)  {
  // properti di constructor funct
  this.name = name;
  this.email = email;

  // method di constructor funct
  this.sayHello = function()  {
    console.log(`Hello my name is ${this.name}`);
  };
}

const ari = new Person();
ari.name = "Ari";
ari.sayHello();

console.log();
