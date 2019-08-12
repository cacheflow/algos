var longestCommonPrefix = function (strs) {
  const sortedList = strs.sort((a, b) => {
    return b.length > a.length ? 1 : -1
  })
  return sortedList
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]))
