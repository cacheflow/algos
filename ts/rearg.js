const rearg = (fn, indexes) => (...args) => fn(
  ...args.reduce(((acc, val, i) => {
    return acc[indexes.indexOf(i)] = val, acc)
  }), 
    // creates array with x number of elements that are undefined
    // based on length
  )
)

var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a');
