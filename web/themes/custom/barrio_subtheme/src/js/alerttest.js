const summa = (s, d) => s + d;
alert(summa(250, 250)); // 500

let sum = (a, b) => a + b;
alert(sum(100, 200)); // 300


let testjs = {
  title: "JS + Gulp:  ",
  strings: ["Это", "просто тест"],
  showList() {
    this.strings.forEach(
      string => alert(this.title + string)
    );
  }
};
testjs.showList();


