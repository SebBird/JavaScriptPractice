const address = {
  street: "",
  city: "",
  country: "",
};

//Boring, old way of destructuring
const street = address.street;
const city = address.city;
const country = address.country;

//Use this instead
const { street: st, city: ct, country: co } = address;
