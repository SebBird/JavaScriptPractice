//Prototypes, inheritance, super constructor, and constructor inheritance

//Function to automatically extend the prototype of a parent onto a child object
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//Parent object
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicated");
};

//Children objects
function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

//Override method defined in parent
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);

  console.log("circle duplicated");
};

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}
extend(Square, Shape);

const shapeOne = new Shape();
const circleOne = new Circle(1, "red");
const squareOne = new Square(1, "blue");
