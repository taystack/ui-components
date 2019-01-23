import CircleSlice from "../../Helpers/CircleSlice";


describe("CircleSlice(ROTATION, SLICES)", () => {
  const arr = [0,1,2,3,4,5];
  const WEDGE_SIZE = 360 / arr.length;

  it("should return the slice index @ rotations", () => {
    expect(CircleSlice(0, WEDGE_SIZE)).toEqual(0);
    expect(CircleSlice(360, WEDGE_SIZE)).toEqual(0);
    expect(CircleSlice(720, WEDGE_SIZE)).toEqual(0);
    expect(CircleSlice(1080, WEDGE_SIZE)).toEqual(0);
    expect(CircleSlice(-360, WEDGE_SIZE)).toEqual(0);
    expect(CircleSlice(-720, WEDGE_SIZE)).toEqual(0);
    expect(CircleSlice(-1080, WEDGE_SIZE)).toEqual(0);

    expect(CircleSlice(WEDGE_SIZE, WEDGE_SIZE)).toEqual(5);
    expect(CircleSlice(360 + WEDGE_SIZE, WEDGE_SIZE)).toEqual(5);
    expect(CircleSlice(720 + WEDGE_SIZE, WEDGE_SIZE)).toEqual(5);
    expect(CircleSlice(-WEDGE_SIZE, WEDGE_SIZE)).toEqual(-1);
    expect(CircleSlice(-(360 + WEDGE_SIZE), WEDGE_SIZE)).toEqual(-1);
    expect(CircleSlice(-(720 + WEDGE_SIZE), WEDGE_SIZE)).toEqual(-1);
  });
});
