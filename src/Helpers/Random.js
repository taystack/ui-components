const Random = (from = 0, to = 1) => {
  return Math.floor(Math.random() * to) + from;
};

export default Random;
