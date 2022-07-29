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

console.log(flatten([1, 2, [3, 4], 5, [6,[2,3]]]));