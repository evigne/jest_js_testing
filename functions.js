const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2, // arrow function
  // add : function(num1, num2){    // same as above
  //     return num1 + num2;
  // }
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: "Vignesh" };
    user["lastName"] = "Ethirajan";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data) //res - response
      .catch(err => "error") // incase of error catch
};

module.exports = functions; // we export the above function so that we can use in our test file
