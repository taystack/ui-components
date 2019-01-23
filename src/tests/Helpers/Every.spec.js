import Every from "../../Helpers/Every";


describe("Every(ARRAY, CB)", () => {
  it("should check if every value of ARRAY against CB", () => {
    const test = Every([1, 2, 3, 4], (item) => {
      return item > 0;
    });
    expect(test).toEqual(true);
  });

  it("should return false if CB fails item in ARRAY", () => {
    const test = Every([1, 2, 3, 4], (item) => {
      return item > 1;
    });
    expect(test).toEqual(false);
  });

  it("should error if ARRAY is not an array", () => {
    try {
      Every("");
    } catch (error) {
      expect(error.message).toEqual("First argument to Every() should be an Array");
    }
  });
});
