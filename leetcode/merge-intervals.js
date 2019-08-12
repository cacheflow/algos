
const merge = function (intervals) {
  if(intervals.length === 0 || intervals === null || intervals === undefined || typeof intervals === 'string') {
    return [];
  }
  if(intervals.length === 1) {
    if(intervals[0].length === 2) {
      return intervals
    }
  }
  intervals.sort((a, b) => {
    return a[0] - b[1]
  });

  let arr = [];
  for(let i = 0; i < intervals.length; i++) {
    let current = intervals[i]
    let next = intervals[i + 1]
    if(current && next) {
      const currentMin = Math.min(current[0], current[1])
      const currentMax = Math.max(current[0], current[1])
      const nextMin = Math.min(next[0], next[1])
      const nextMax = Math.max(next[0], next[1])
      if(currentMax >= nextMin && currentMax <= nextMax) {
        arr.push(currentMin, nextMax)
        current.length = 0
        next.length = 0
      }
    }
  }
  if(arr.length >= 1) {
    intervals = intervals.filter(interval => interval.length >= 1)
    intervals.push(arr)
    intervals.sort((intervalA, intervalB) => {
      return intervalA[0] - intervalB[1]
    })
    return intervals
  }
  return intervals
};

console.log(merge([[1, 4], [0, 4]]))

