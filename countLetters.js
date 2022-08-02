const countLetters = (str) =>{
  let obj = {};
  const strLowerCase = str.toLowerCase().replace(/ /g,'');
  for (let char of strLowerCase) {
    (!obj[char]) ? obj[char] = 1 : obj[char]++;
  }
  return obj;
};
module.exports = countLetters;
