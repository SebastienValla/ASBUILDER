import { add } from "../index";

describe("add function", () => {
  test("check add function", () => {
    const got = add(3, 3);
    const want = 6;
    if (got != want) {
      error(
        "add() = " + got.toString() + ", " + want.toString() + " was expected."
      );
      return;
    }
  });
});

describe("add function assert", () => {
  assert(add(2, 2) == 4, "add failed");
});
