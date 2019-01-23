import Clone from "../../Helpers/Clone";


describe("Clone", () => {
  it("should clone an object (no references)", () => {
    const truth = { b: {c: "hey"} };
    const reference = truth;
    const clone = Clone(truth);
    // <Hamlet>
    expect(truth.b).toBe(reference.b);
    expect(truth.b).not.toBe(clone.b);
    // </Hamlet> :D
  });
});
