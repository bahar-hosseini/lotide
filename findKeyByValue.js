const findKeyByValue = (obj,value) =>{
  let result = undefined;
  let keys = Object.keys(obj);

  for (let i of keys) {
    if (obj[i] === value) {
      result = i;
    }
  }
  return result;
};

module.exports = findKeyByValue;