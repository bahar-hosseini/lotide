const flatten = function(array) {
  const flat = [];

  array.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
};
module.exports = flatten;