export default {
  jsonStringify(item) {
    return JSON.stringify(item);
  },
  jsonParse(item) {
    return JSON.parse(item);
  },
  setItem(key, item, jsonStringify = true) {
    if (jsonStringify) {
      localStorage.setItem(key, this.jsonStringify(item));
    } else {
      localStorage.setItem(key, item);
    }
  },
  getItem(key, jsonParse = true) {
    if (jsonParse) {
      return localStorage.getItem(key) ? this.jsonParse(localStorage.getItem(key)) : '0';
    }
    return localStorage.getItem(key);
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
};
