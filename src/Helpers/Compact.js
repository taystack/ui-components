import { isTruthy } from "./Is";

const Compact = (arr) => arr.filter(isTruthy);

export default Compact;
