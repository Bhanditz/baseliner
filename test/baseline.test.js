import baseliner from "../src";

it("should compare two objects for equality", () => {
  const base = { a: 13 };
  const obj1 = { a: 13 };
  const obj2 = { a: 17 };
  const fcn = (x, y) => x === y;

  expect(baseliner(base, obj1, "a", fcn)).toEqual(true);
  expect(baseliner(base, obj2, "a", fcn)).toEqual(false);
});
