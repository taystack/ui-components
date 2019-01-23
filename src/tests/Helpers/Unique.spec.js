import Unique from "../../Helpers/Unique";


describe("Unique(ARRAY)", () => {
  it("should return a new array with unique values from ARRAY", () => {
    expect(Unique([1,1,2,2,2,3,3,3,3])).toEqual([1,2,3]);
    expect(Unique(["hey", "hey", "bro"])).toEqual(["hey", "bro"]);
  });
});
