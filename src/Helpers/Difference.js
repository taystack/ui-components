/*
Difference(ARRAY1, ARRAY2)
=> Array

Returns ARRAY1 without values from ARRAY2

Params:
  ARRAY1: Array of String
  ARRAY2: Array of String
*/
const Difference = (arr1, arr2) => {
  if (!arr1) return [];
  if (!arr2) return arr1;
  const ret = [];
  arr1.forEach((item) => {
    if (arr2.indexOf(item) < 0) ret.push(item);
  });
  return ret;
};

export default Difference;
