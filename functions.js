const functions = {
    add : (num1, num2) => num1 + num2, // arrow function 
    // add : function(num1, num2){    // same as above
    //     return num1 + num2;
    // }
    isNull : () => null,
    checkValue : (x) => x,
    createUser : () => {
        const user = { firstName : 'Vignesh'}
        user['lastName'] = 'Ethirajan';
        return user;
    }
    
}

module.exports = functions; // we export the above function so that we can use in our test file 