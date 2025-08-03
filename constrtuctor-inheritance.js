function Manager(firstName) {
  this.firstName = firstName;
  this.lastName;
}

function Employee(firstName, lastName) {
  // Constr Inheritance -> copy code dari constr lain
  // NamaConstructor.call(this, param)
  // jumlah param call harus sama dgn param constr parent
  Manager.call(this, firstName);
  this.lastName = lastName;
}

const eko = new Employee("Eko", "Gunawan");
console.log(eko);
