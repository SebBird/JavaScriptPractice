function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (value) {
    items.push(value);
  };
  this.removeItem = function (value) {
    const index = items.indexOf(value);
    items.splice(index, 1);
  };
}
HtmlSelectElement.prototype = new HtmlElement();

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

const a = new HtmlElement();
const b = new HtmlSelectElement([1, 2, 3]);
