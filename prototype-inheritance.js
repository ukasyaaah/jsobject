function Manager(name) {
  this.name = name;
}

function Employee(name) {
  Manager.call(this, name);
}

// Cara Salah
Employee.prototype = Manager.prototype;

// Cara benar
Employee.prototype = Object.create(Manager.prototype);


// Contoh 
Employee.prototype.run = function () {
  console.log(`Employee ${this.name} is running`);
};

Manager.prototype.run = function () {
  console.log(`Manager ${this.name} is running`);
};

const ari = new Employee("ari");
const adi = new Manager("adi");

ari.run();
adi.run();
