const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const flatten = require('./flatten');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const without = require('./without');
const takeUntil = require('./takeUntil');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertEqual = require('./assertEqual');
module.exports = {
  head,
  tail,
  middle,
  flatten,
  eqObjects,
  findKeyByValue,
  map,
  without,
  eqArrays,
  takeUntil,
  letterPositions,
  findKey,
  countOnly,
  countLetters,
  assertEqual
};