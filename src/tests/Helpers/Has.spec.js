import Has from "../../Helpers/Has";


describe("Has(TARGET, VALUE)", () => {
  it("should check if TARGET has VALUE", () => {
    expect(Has()).toEqual(false);
    expect(Has([])).toEqual(false);
    expect(Has([1,2,3], 4)).toEqual(false);
    expect(Has("some", "foo")).toEqual(false);

    expect(Has([1,2,3,4], 4)).toEqual(true);
    expect(Has({a: 1, b: 2}, "a")).toEqual(true);
    expect(Has("something", "thing")).toEqual(true);
  });
});
