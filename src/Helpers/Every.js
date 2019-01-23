import Compact from "./Compact";
import { isArray, isTruthy } from "./Is";


class EveryError extends Error {}

const Every = (iterable, compare = isTruthy) => {
  if (!isArray(iterable)) throw new EveryError("First argument to Every() should be an Array");
  const size = iterable.length;
  const valid = Compact(iterable.map(compare));
  return size === valid.length;
};

export default Every;
