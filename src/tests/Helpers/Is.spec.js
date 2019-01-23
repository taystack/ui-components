import {
  isArray,
  isObject,
  isString,
  isTruthy,
} from "../../Helpers/Is";


describe("Is", () => {
  describe("isArray(ARRAY)", () => {
    it("should pass if ARRAY is an array", () => {
      expect(isArray([])).toEqual(true);
      expect(isArray("")).toEqual(false);
      expect(isArray({})).toEqual(false);
      expect(isArray(false)).toEqual(false);
    });
  });

  describe("isObject(OBJECT)", () => {
    it("should pass if OBJECT is an object", () => {
      expect(isObject(({}))).toEqual(true);
      expect(isObject("")).toEqual(false);
      expect(isObject([])).toEqual(false);
      expect(isObject(false)).toEqual(false);
    });
  });

  describe("isString(STRING)", () => {
    it("should pass if STRING is a string", () => {
      expect(isString("")).toEqual(true);
      expect(isString([])).toEqual(false);
      expect(isString({})).toEqual(false);
      expect(isString(false)).toEqual(false);
    });
  });

  describe("isTruthy(THING)", () => {
    it("should pass if THING is truthy", () => {
      expect(isTruthy("")).toEqual(false);
      expect(isTruthy([])).toEqual(false);
      expect(isTruthy({})).toEqual(false);
      expect(isTruthy(false)).toEqual(false);
      expect(isTruthy("yep")).toEqual(true);
      expect(isTruthy([1])).toEqual(true);
      expect(isTruthy({a: 1})).toEqual(true);
      expect(isTruthy(true)).toEqual(true);
    });
  });
});
