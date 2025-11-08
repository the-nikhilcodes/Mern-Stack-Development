class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("This Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  let user = new User("Nikhil");
  console.log(user.name); 
  
  user.name = "Saurabh "
  console.log(user.name)