const Unique = (arr) => {
  const ret = [];
  arr.forEach((item) => {
    if (ret.indexOf(item) < 0) {
      ret.push(item);
    }
  });
  return ret;
};

export default Unique;
