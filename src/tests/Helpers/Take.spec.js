import Take from "../../Helpers/Take";


describe("Take(ARRAY, COUNT)", () => {
  it("should take COUNT items from ARRAY", () => {
    const arr = Take([1,2,3,4,5,6], 2);
    expect(arr.toString()).toEqual("1,2");
  });
});
