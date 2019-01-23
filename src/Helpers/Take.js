import Times from "./Times";


const Take = (arr, count) => {
  const ret = [];
  Times(count, function(index) {
    ret.push(arr[index]);
  });
  return ret;
};

export default Take;
