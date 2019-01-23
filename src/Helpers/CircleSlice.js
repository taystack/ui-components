// Will tell you which slice you are looking at;
// Returns index of slice @ rotation 0 <= slice <= SLICES - 1
const CircleSlice = (rotation, slice) => {
  let value = rotation % 360 / slice;
  if (value === 0) return 0;
  if (value < 0) {
    return value;
  }
  return (360 / slice) - value;
};

export default CircleSlice;
