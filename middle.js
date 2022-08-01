const middle = function(array) {
  let result = [];
  const arrLength = array.length;
  if (arrLength < 3) {
    return result;
  } else if (arrLength % 2 === 0) {
    result.push(array[(arrLength / 2) - 1]);
    result.push(array[arrLength / 2]);
  } else {
    result.push(array[Math.floor(arrLength / 2)]);
  }
  return result;
};

module.exports = middle;


