//Function to automatically extend the prototype of a parent onto a child object
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//Parent object
function Shape() {}
Shape.prototype.duplicate = function () {
  console.log("Duplicated");
};

//Children objects
function Circle() {
  Shape.call(this);
}
extend(Circle, Shape);
Circle.prototype.duplicate = function () {
  console.log("Circle duplicated");
};

function Square() {
  Shape.call(this);
}
extend(Square, Shape);
Square.prototype.duplicate = function () {
  console.log("Square duplicated");
};

//Polymorphism
//Each object has a different implementation of the 'duplicate' method

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}
