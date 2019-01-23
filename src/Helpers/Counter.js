class Counter {
  constructor(from, to, increment) {
    this.current = from;
    this.setTarget(to, increment);
  }

  get countingDown() {
    return this.increment < 0;
  }

  get value() {
    if (this.isDone()) return this.to;
    return this.current;
  }

  setTarget(to, increment = 1) {
    this.to = to;
    this.increment = (this.current > this.to ? -1 : 1) * increment;
    return this;
  }

  isDone() {
    return this.countingDown ? this.current <= this.to : this.current >= this.to;
  }

  turn() {
    if (this.isDone()) return this.value;
    this.current += this.increment;
    return this.value;
  }
}

export default Counter;
