// Sufficient for this project.
const Clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export default Clone;
