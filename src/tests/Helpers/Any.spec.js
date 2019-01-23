import Any from "../../Helpers/Any";


describe("Any(ARRAY, CB)", () => {
  it("should check if any value of ARRAY against CB, defaults to isTruthy", () => {
    expect(Any()).toEqual(false);
    expect(Any([])).toEqual(false);
    expect(Any([false, false])).toEqual(false);
    expect(Any([false, true])).toEqual(true);
    expect(Any([true, false])).toEqual(true);
    expect(Any([true, true])).toEqual(true);
  });

  it("should check if any value of ARRAY against CB", () => {
    expect(Any([10, 20], v => v > 10)).toEqual(true);
    expect(Any([10, 20], v => v < 10)).toEqual(false);
  });

  it("should raise any errors", () => {
    expect(() => {
      Any([true], "foo");
    }).toThrowError(TypeError);
  });
});
