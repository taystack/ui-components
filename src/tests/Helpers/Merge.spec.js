import Merge from "../../Helpers/Merge";


describe("Merge(SRC, ...OBJS)", () => {
  it("should merge objects overriding in order", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const merge = Merge({}, obj1, obj2);
    expect(merge.a).toEqual(1);
    expect(merge.b).toEqual(3);
    expect(merge.c).toEqual(4);
  });

  it("should mutate SRC if populated", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    Merge(obj1, obj2);
    expect(obj1.a).toEqual(1);
    expect(obj1.b).toEqual(3);
    expect(obj1.c).toEqual(4);
  });
});
