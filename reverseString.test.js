const reverseString = require("./reverseString");

test("reverseSting function exists", () => {
  expect(reverseString).toBeDefined(); // see if the function defined
});

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverses with uppdercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
