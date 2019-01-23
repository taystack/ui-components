const Pick = (obj, keys) => {
  const ret = {};
  keys.forEach(k => (ret[k] = obj[k]));
  return ret;
};

export default Pick;
