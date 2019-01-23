import Clone from "./Clone";


// Sufficient for this project.
// TODO: Might wanna to a deep-merge somewhere else.
const Merge = (target, ...objects) => {
  objects.forEach((obj) => {
    for (let k in obj) {
      target[k] = Clone(obj[k]);
    }
  });
  return target;
};

export default Merge;
