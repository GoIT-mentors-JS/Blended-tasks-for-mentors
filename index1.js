class User {
  constructor(name, email) {
    this.info = {
      name: name,
      email: email,
    };
  }
  
  getEmail = () => {
    return console.log(this.info.email);
  };

  getName = () => {
    return console.log(this.info.name);
  };
}

const Mango = new User('Mango', 'Mango@gamil.com');

console.log(Mango.getEmail());
console.log(Mango.getName());