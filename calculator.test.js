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


test("return sum for multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
});

test("handle new lines", () => {
    expect(add("1\n2,3")).toBe(6);
});
