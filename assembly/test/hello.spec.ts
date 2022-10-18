import { getOf } from "@massalabs/massa-as-sdk/assembly/std/storage";
import { event, setStorage } from "../hello";
import { Address } from "@massalabs/massa-as-sdk";

describe("A group of test", () => {
  test("A test throwing an error", () => {
    event();
    const got = 42;
    const want = 41;
    if (got != want) {
      error(got.toString() + ", " + want.toString() + " was expected.");
      return;
    }
  });
});

describe("An other group of test", () => {
  test("Testing the Storage", () => {
    setStorage();
    error(
      "getOf " +
        getOf(
          new Address("A12E6N5BFAdC2wyiBV6VJjqkWhpz1kLVp2XpbRdSnL1mKjCWT6oR"),
          "test"
        )
    );
    assert(
      getOf(
        new Address("A12E6N5BFAdC2wyiBV6VJjqkWhpz1kLVp2XpbRdSnL1mKjCWT6oR"),
        "test"
      ) == "value",
      "Test failed test"
    );
  });
});

// describe("test set get", () => {
//   test("Testing the Storage", () => {
//     setStorage();
//     const got = getOf(
//       new Address("A12E6N5BFAdC2wyiBV6VJjqkWhpz1kLVp2XpbRdSnL1mKjCWT6oR"),
//       "test"
//     );
//     const want = "value";
//     if (got != want) {
//       error(got + ", " + want + " was expected.");
//       return;
//     }
//   });
// });
