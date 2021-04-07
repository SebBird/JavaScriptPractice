const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  [_draw]() {}
}

const c = new Circle(1);
