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
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  map: map,
  without: without,
  eqArrays: eqArrays,
  takeUntil :takeUntil,
  letterPositions:letterPositions,
  findKey:findKey,
  coutnOnly:countOnly,
  countLetters:countLetters,
  assertArraysEqual:assertArraysEqual,
  assertObjectsEqual : assertObjectsEqual,
  assertEqual : assertEqual
};