import Pick from "../../Helpers/Pick";


describe("Pick(OBJECT, KEYS)", () => {
  it("should return an object with KEYS from OBJECT", () => {
    const pick = Pick({ a: 1, b: 2, c: 3 }, ["a", "b"]);
    expect(Object.keys(pick)).toEqual(["a", "b"]);
  });
});
