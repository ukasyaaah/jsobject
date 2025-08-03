class Managerr {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.log(`Hello ${name}, I'am a Manager ${this.name}`);
  }
}

// Gunakan extends
class Employeee extends Managerr {
  sayHello(name) {
    console.log(`Hello ${name}, I'am an Employee ${this.name}`);
  }
}

const gunawan = new Managerr("Gunawan");
gunawan.sayHello("Ari");

const ari = new Employeee("Ari");
ari.sayHello("Gunawan");
