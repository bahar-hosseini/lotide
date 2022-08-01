//Internal Modules:
const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");



//TEST CODE:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "Brooklyn Nine-Nine");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
