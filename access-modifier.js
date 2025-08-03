class Movie {
  // Public Field
  title;
  year;
  director;

  constructor(title, name, director) {
    this.title = title;
    this.year = year;
    this.director = director;
  }
}

class Counter {
  // Private Field
  #counter = 0;
  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  getCounter() {
    return this.#counter;
  }
}

let count = new Counter();
count.increment();
count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
console.log(count.getCounter());

// Private Method
class Say {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithName(name) {
    console.log(`Hello ${name}`);
  }

  #sayWithoutName() {
    console.log(`Hello`);
  }
}

let sapa = new Say();

sapa.say();
sapa.say("Hani");
