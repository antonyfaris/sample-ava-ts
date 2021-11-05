import test from "ava";

const fn = () => "foo";

// https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#writing-tests
test("fn() returns foo", (t) => {
  t.is(fn(), "foo");
});
