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
