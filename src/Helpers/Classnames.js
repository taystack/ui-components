/*
Classnames(...CLASSNAMES)
=> String

Returns String evaluated from CLASSNAMES

Params:
  ...CLASSNAMES: Any number of String, Object, Array
*/

import Compact from "./Compact";


const Classnames = (...classnames) => {
  return Compact(classnames.map((className) => {
    let ret = "";
    if (className instanceof Object) {
      const cls = [];
      if (className instanceof Array) {
        cls.push(Classnames(...className));
      } else {
        for (let key in className) {
          if (className[key]) {
            cls.push(key);
          }
        }
      }
      ret = cls.join(" ");
    } else if (typeof className === "string") {
      ret = className;
    } else {
      ret = false;
    }
    return ret;
  })).join(" ");
};

export default Classnames;
