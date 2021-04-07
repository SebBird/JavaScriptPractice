class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
}

const c = new Circle("red");

//CLASS METHOD OVERRIDING

class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    console.log("circle move");
  }
}

const c = new Circle("red");
