function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (value) {
    items.push(value);
  };
  this.removeItem = function (value) {
    const index = items.indexOf(value);
    items.splice(index, 1);
  };
  this.render = function () {
    return `
    <select>${this.items
      .map((item) => `<option>${item}</option>`)
      .join("")}</select>`;
  };
}

function HtmlImageElement(src = "") {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlImageElement.prototype = new HtmlElement();

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

const a = new HtmlElement();
const b = new HtmlSelectElement([1, 2, 3]);
const c = new HtmlImageElement("https://google.com");
