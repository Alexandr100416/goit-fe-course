"use strict";
function home4() {
  function formatString(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || "...";
    return str.substr(0, n - symb.length) + symb;
  }

  console.log(formatString("Curabitur ligula sapien, tincidunt non."));

  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  );

  console.log(formatString("Curabitur ligula sapien."));

  console.log(
    formatString(
      "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
  );
}
