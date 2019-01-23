import {
  isString,
  isObject,
  isArray,
} from "./Is";


const Has = (target, val) => {
  if (!target) return !!target;
  if (isString(target)) return !!target.match(val);

  let array = target;
  if (isObject(target)) {
    array = Object.keys(target);
  }
  return array.indexOf(val) > -1;
};

export default Has;
