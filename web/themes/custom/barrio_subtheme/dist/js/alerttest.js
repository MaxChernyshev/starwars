"use strict";

var summa = function summa(s, d) {
  return s + d;
};

alert(summa(250, 250)); // 500

var sum = function sum(a, b) {
  return a + b;
};

alert(sum(100, 200)); // 300

var testjs = {
  title: "JS + Gulp:  ",
  strings: ["Это", "просто тест"],
  showList: function showList() {
    var _this = this;

    this.strings.forEach(function (string) {
      return alert(_this.title + string);
    });
  }
};
testjs.showList();