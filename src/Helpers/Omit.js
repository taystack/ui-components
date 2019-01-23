import Difference from "./Difference";


const Omit = (obj, keys) => {
  const ret = {};
  const newKeys = Difference(Object.keys(obj), keys);
  newKeys.forEach(key => ret[key] = obj[key]);
  return ret;
};

export default Omit;
