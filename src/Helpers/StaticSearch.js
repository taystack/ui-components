/*
class StaticSearch(ARRAY)

The goal of StaticSearch is to be able to search
through a large amount of data via tree of nodes.

*/

class StaticSearchError extends Error {}

class StaticSearch {
  constructor(items, searchKeys) {
    console.warn("StaticSearch not ")
    this.items = items;
    this.__searchKeys__ = searchKeys;
    this.__searchTerm__ = undefined;
  }

  get items() { return this.__items__; }
  set items(items) {
    if (items instanceof Array) {
      this.__items__ = items;
      this.createTree();
    } else {
      throw new StaticSearchError(`items must be Array, you provided ${items}`);
    }
  }

  get searchTerm() { return this.__searchTerm__; }
  set searchTerm(searchTerm) {
    if (searchTerm instanceof String) this.__searchTerm__ = searchTerm;
    else throw new StaticSearchError(`searchTerm must be String, you provided ${searchTerm}`);
  }

  createTree() {
    console.warn("StaticSearch.prototype.createTree not implemented");
  }

  filter(searchTerm) {
    this.searchTerm = searchTerm;
    return this.items;
  }
}
