const { add } = require("./calculator");

test("return 0 for empty", () => {
    expect(add("")).toBe(0);
});


test("return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
});


test("return sum for numbers separated by a comma", () => {
    expect(add("1,5")).toBe(6);
});