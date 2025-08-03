class Square {
  paint() {
    console.log(`Paint Square`);
  }
}

class Circle extends Square {
  paint() {
    super.paint(); // referensi ke Square
    console.log(`Paint Circle`);
  }
}

const circle = new Circle();
circle.paint();
