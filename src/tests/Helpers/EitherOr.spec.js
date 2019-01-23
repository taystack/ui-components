import EitherOr from "../../Helpers/EitherOr";


describe("EitherOr", () => {
  it("should choose the first argument isTruthy", () => {
    expect(EitherOr(true, false)).toEqual(true);
  });

  it("should choose the second argument if the first !isTruthy", () => {
    expect(EitherOr(false, true)).toEqual(true);
  });

  it("should choose the second argument if both arguments !isTruthy", () => {
    expect(EitherOr(false, false)).toEqual(false);
  });
});
