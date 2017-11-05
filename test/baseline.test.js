import baseliner from "../src";

it("should compare two objects for equality", () => {
  const left = { a: 13 };
  const right = { a: 13 };
  const fcn = (x, y) => x === y;

  expect(baseliner(left, right, "a", fcn)).toEqual(true);
  expect(baseliner(left)(right)("a")(fcn)).toEqual(true);
});
