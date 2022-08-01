const assertEqual = require("../assertEqual");
const head = require("../head");




// TEST CODE
assertEqual(head(['a','b']),'a');
assertEqual(head([3,6,7]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['a']), 'a');
assertEqual(head([]), undefined);
  