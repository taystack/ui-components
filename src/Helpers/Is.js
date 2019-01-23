export const isArray = (item) => (item instanceof Array);

export const isObject = (item) => (!isArray(item) && item instanceof Object);

export const isString = (item) => (typeof item === "string");

export const isTruthy = (item) => {
  if (isObject(item)) {
    return Object.keys(item).length > 0;
  }
  if (isArray(item) || isString(item)) {
    return item.length > 0;
  }
  return !!item;
}

export default {
  isArray,
  isObject,
  isString,
  isTruthy,
};
