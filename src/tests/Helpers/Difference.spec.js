import Difference from "../../Helpers/Difference";


describe("Difference(ARRAY1, ARRAY2)", () => {
  it("should return ARRAY1 without values from ARRAY2", () => {
    expect(Difference()).toEqual([]);
    expect(Difference([1,2])).toEqual([1,2]);
    expect(Difference([1,2], [3])).toEqual([1,2]);

    expect(Difference([1,2], [1])).toEqual([2]);
    expect(Difference(["a", "b", "c"], ["b"])).toEqual(["a", "c"]);
  });
});
