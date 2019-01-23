import MatchFinder from "../../Helpers/MatchFinder";
import Compact from "../../Helpers/Compact";
import Unique from "../../Helpers/Unique";


describe("MatchFinder(STRING, FILTER)", () => {
  it("should find matches", () => {
    let matcher;
    expect(new MatchFinder().hasMatch).toEqual(false);
    expect(new MatchFinder("", "").hasMatch).toEqual(false);
    expect(new MatchFinder("hey", "").hasMatch).toEqual(false);
    expect(new MatchFinder("hey", "h").hasMatch).toEqual(true);
    expect(new MatchFinder("hey", "dude").hasMatch).toEqual(false);
    expect(new MatchFinder("hey", "hey").hasMatch).toEqual(true);
    expect(new MatchFinder("hey, dude", "hey").hasMatch).toEqual(true);
    expect(new MatchFinder("dude, hey", "hey").hasMatch).toEqual(true);

    matcher = new MatchFinder("somthing and things", "thing");
    expect(matcher.hasMatch).toEqual(true);
    const match1 = matcher.matches[0].string;
    expect(match1).toEqual("som");
    const match2 = matcher.matches[1].string;
    expect(match2).toEqual("thing");
    const match3 = matcher.matches[2].string;
    expect(match3).toEqual(" and ");
    const match4 = matcher.matches[3].string;
    expect(match4).toEqual("thing");
    const match5 = matcher.matches[4].string;
    expect(match5).toEqual("s");
  });
});
