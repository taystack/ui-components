const Times = (count, cb, thisArg) => {
  return new Array(count).fill().map(function(_, index) { return cb(index) });
};

export default Times
