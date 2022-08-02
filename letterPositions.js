const letterPositions = function(sentence) {
  const obj = {...sentence};
  const revObj = {};

  Object.keys(obj).forEach((key)=> {
    revObj[obj[key]] = key;
  });
  return revObj;
  
};
module.exports = letterPositions;