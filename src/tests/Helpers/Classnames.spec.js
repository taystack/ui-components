import Classnames, {
  ClassnamesError
} from "../../Helpers/Classnames";


describe("Classnames", () => {
  it("should return empty string", () => {
    expect(Classnames()).toEqual("");
  });

  it("should return a className with all strings", () => {
    const className = Classnames("hey", "bro", "man", "dude");
    expect(className).toEqual("hey bro man dude");
  });

  it("should take an object and use keys with truthy values", () => {
    const className = Classnames({ ya: true, bro: false, dude: true });
    expect(className).toEqual("ya dude");
  });

  it("should take objects strings", () => {
    const className = Classnames({ ya: true, bro: false, dude: true }, "okay");
    expect(className).toEqual("ya dude okay");
  });

  it("should ignore falsey arguments", () => {
    expect(Classnames(undefined, false, null)).toEqual("");
  });

  it("allow nested arrays", () => {
    expect(Classnames([[["yep"]]])).toEqual("yep");
  });
});
