const functions = require("./functions"); // bring that function for testing

// beforeEach(() => initDatabase());  // Run Before Each test
// afterEach(() => closeDatabase());  // Run After Each test

// beforeAll(() => initDatabase());  // Run Before All test
// afterAll(() => closeDatabase());  // Run After All test

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

// describe - target the test to run once instead of before or after -  creates a block that groups together several related tests.

// https://jestjs.io/docs/en/api#describename-fn
const nameCheck = () => console.log("Checking Name....");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

//toBe
test("Add two numbers", () => {
  expect(functions.add(2, 2)).toBe(4); // test function and expected result // toBe is a matcher
});
// not to be
test("Add 2 + 2 Not Equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5); // more matchers https://jestjs.io/docs/en/using-matchers
});
// to be null
test("should be null", () => {
  expect(functions.isNull()).toBeNull;
});
// to be falsy
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy;
});
//to Equal
test("user should be Vignesh Ethirajan Object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Vignesh",
    lastName: "Ethirajan"
  }); // for objects we should use toEqual becoz object has different addresses
});

//LessThan GreateThan
test("LessThan 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in userNames", () => {
  userNames = ["Vignesh", "Hope", "Admin"];
  expect(userNames).toContain("Admin");
});

// Working with Async data
//promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1); // verify the number of assertions called in this case it is one -- for testing Async code -- if leave assertion and name doesnt match the test still pass
  return functions.fetchUser().then(data => {
    // return the promise, if we omit return the test will complete before the fetch complete(axios.get())
    expect(data.name).toEqual("Leanne Graham");
    // expect(data.name).toEqual("Leanne Graham1"); //comment expect.assertions(1); and thisLine and test
  });
});
//Async Awaits  Async way

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1); // verify the number of assertions called in this case it is one -- for testing Async code -- if leave assertion and name doesnt match the test still pass
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

// // Working with Async data
// test("User fetched name should be Leanne Graham", () => {
//   // expect.assertions(1);
//   functions.fetchUser().then(data => {
//     // return the promise, if we omit return the test will complete before the fetch complete(axios.get())
//     expect(data.name).toEqual("Leanne Graham");
//     // expect(data.name).toEqual("Leanne Graham1"); //comment expect.assertions(1); and thisLine and test
//   });
// });

// describe(name, fn)
// describe(name, fn) creates a block that groups together several related tests. For example, if you have a myBeverage object that is supposed to be delicious but not sour, you could test it with:

// const myBeverage = {
//   delicious: true,
//   sour: false,
// };

// describe('my beverage', () => {
//   test('is delicious', () => {
//     expect(myBeverage.delicious).toBeTruthy();
//   });

//   test('is not sour', () => {
//     expect(myBeverage.sour).toBeFalsy();
//   });
// });
