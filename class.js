class Wong {
  // constructor pada class
  constructor(name = "Guest") {
    // properti pada class
    this.name = name;

    console.log(`Hello, my name is ${this.name}`);
  }

  // method pd class gaperlu keyword function
  /* rekomendasinya, bikin method di prototype, 
     bukan di instance obj nya */
  // secara otomatis method di class akan masuk ke proto
  sayName(name) {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
}

const ari = new Wong("ari");
console.log(ari.name);
ari.sayName("Fadi");
