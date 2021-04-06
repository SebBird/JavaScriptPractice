function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walk");
  },
};

const canSwim = {
  swim: function () {
    console.log("swim");
  },
};

function Person() {}

const person = new Person();
console.log(person);

function Fish() {}
mixin(Fish.prototype, canEat, canSwim);

const fish = new Fish();
console.log(fish);

function Penguin() {}
mixin(Penguin, canEat, canWalk, canSwim);

const penguin = new Penguin();
console.log(penguin);
