import Any from "./Any";


export default class MatchFinder {
  constructor(string, compare, options = {
    minSearchLength: 1,
    findAll: true,
  }) {
    this.__string = string || "";
    this.__options = options;
    this.__compare = compare || "";
    this.__matches = [];
    this.__hasMatch = false;
    this.__index = 0;
    if (!this.string && !this.string.length) return;
    if (!this.compare && !this.compare.length) return;
    this.findAllMatches(this.string);
  }

  static find(string, regExp) {
    return regExp.exec(string);
  }

  get hasMatch() {
    return this.__hasMatch;
    // return !!this.matches.length && Any(this.matches, m => m.match);
  }

  get matches() {
    return this.__matches;
  }

  get compare() {
    return this.__compare;
  }

  get string() {
    return this.__string;
  }

  parseMatch(fullString, index, found) {
    let string;
    if (found.index > index) {
      /*
      The match is after the first character of fullString.
      Pull the non-matching text out into the first index.
      */
      string = fullString.slice(index, found.index);
      this.__matches.push({ string });
    }
    string = fullString.slice(found.index, found.index + this.compare.length);
    this.__matches.push({
      string,
      match: true,
    });
    const end = fullString.slice(found.index + string.length, fullString.length);
    if (end.length) {
      this.findAllMatches(end, found.index + string.length);
    }
  }

  findAllMatches(string, index = 0) {
    const match = new RegExp(this.compare, "gi");
    const found = MatchFinder.find(string, match);
    if (found) {
      this.__hasMatch = true;
      this.parseMatch(string, 0, found);
    } else {
      /*
      There was no match, end the search
      */
      this.__matches.push({ string });
    }
  }
}
