import Omit from "../../Helpers/Omit";


describe("Omit(TARGET, KEYS)", () => {
  it("should return new TARGET without KEYS", () => {
    const target = { a: 1, b: 2, c: 3, d: 4 };
    const newObj = Omit(target, ["a", "b"]);
    expect(Object.keys(newObj).toString()).toEqual("c,d");
  });
});
