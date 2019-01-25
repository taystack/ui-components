import ModIndex from "../../Helpers/ModIndex";


describe("ModIndex(ARRAY, INDEX)", () => {
  it("should return the (INDEX % ARRAY.length) of ARRAY", () => {
    const arr = ["a", "b", "c", "d"];
    expect(ModIndex(arr, 0)).toEqual("a");
    expect(ModIndex(arr, 1)).toEqual("b");
    expect(ModIndex(arr, 4)).toEqual("a");
    expect(ModIndex(arr, 5)).toEqual("b");
    expect(ModIndex(arr, 8)).toEqual("a");
    expect(ModIndex(arr, 9)).toEqual("b");
  });
});
