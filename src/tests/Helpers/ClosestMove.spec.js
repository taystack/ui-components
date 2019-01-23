import ClosestMove from "../../Helpers/ClosestMove";


describe("ClosestMove", () => {
  const arr = [0,1,2,3,4,5,6,7,8,9];
  const mover = new ClosestMove(arr.length);

  describe("find", () => {
    it("should get the correct move for an index to sum towards another", () => {
      expect(mover.find(0, 0)).toEqual(0);
      expect(mover.find(0, 9)).toEqual(1);
      let count = 10;
      while (count - 1 >= 0) {
        expect(mover.find(count, count - 1)).toEqual(1);
        count -= 1;
      }

      expect(mover.find(9, 0)).toEqual(-1);
      count = 0;
      while (count + 1 <= 10) {
        expect(mover.find(count, count + 1)).toEqual(-1);
        count += 1;
      }

      expect(mover.find(4, 0)).toEqual(4);
      expect(mover.find(5, 9)).toEqual(-4);
      expect(mover.find(0, 7)).toEqual(3);
      expect(mover.find(7, 0)).toEqual(-3);
      expect(mover.find(1, 8)).toEqual(3);
      expect(mover.find(8, 1)).toEqual(-3);
    });
  });
});
