import { Clone } from "@taystack/js-helpers";


class ClosestMove {
  constructor(count) {
    this.count = count;
    this.indexes = new Array(count).fill().map((_, i) => (i));
  }

  searcher() {
    const lhs = Clone(this.indexes);
    const rhs = Clone(this.indexes);
    const sliceLeft = this.to - Math.floor(this.to / 2) + 1;
    const sliceRight = sliceLeft + this.count;
    const bigArray = [].concat(lhs).concat(this.indexes).concat(rhs)
    const targetedArray = bigArray.slice(sliceLeft, sliceRight);
    return targetedArray;
  }

  find(from, to) {
    if (from === to) return 0;
    let move = from - to;
    if (Math.abs(move) > this.count / 2) {
      this.from = from;
      this.to = to;
      const searcher = this.searcher();
      const toIndex = searcher.indexOf(this.to);
      const fromIndex = searcher.indexOf(this.from);
      move = fromIndex - toIndex;
    }
    return move;
  }
}

export default ClosestMove;
