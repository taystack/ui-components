import Times from "../../Helpers/Times";


describe("Times(COUNT, CB)", () => {
  it("should CB COUNT times", () => {
    let value = 0;
    Times(5, () => {
      value += 1;
    });
    expect(value).toEqual(5);
  });
});
