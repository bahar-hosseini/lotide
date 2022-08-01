//Internal modules:
const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');




// Test code:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "2" };
assertEqual(eqObjects(ab, ba),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);