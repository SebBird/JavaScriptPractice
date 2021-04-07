// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {};
  }

  //Instance method
  draw() {
    console.log("draw");
  }

  //Static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = Circle.parse('{"radius": 1}');
console.log(c);
