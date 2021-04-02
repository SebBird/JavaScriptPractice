//Demo of constructor function

function Restaurant(title, description, price) {
  this.title = title;
  this.description = description;
  this.price = assignPrice(price);
}

function assignPrice(price) {
  if (price < 20) {
    return "$";
  }
  if (price < 50) {
    return "$$";
  }
  return "$$$";
}

let mcDonalds = new Restaurant("McDonalds", "Burgers", 15);

console.log(mcDonalds);
