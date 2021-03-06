//Demonstrate how getters and setters can be used in objects

const person = {
  firstName: "Seb",
  lastName: "Bird",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Nathan Atherton";

console.log(person);

//ALTERNATIVE

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");

      defaultLocation = value;
    },
  });
}

const circle = new Circle(1);

circle.defaultLocation = { x: 2, y: 5 };

//ALTERNATIVE 2

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("Invalid radius");
    _radius.set(this, value);
  }
}

const c = new Circle(1);
