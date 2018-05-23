class Stack {
  constructor() {
    this.index = 0
    this.data = {}
  }

  push(data) {
    this.data[++this.index] = data
  }

  pop() {
    let {index} = this
    if(index) {
      let deletedItem = this.data[index]
      delete this.data[index]
      --this.index
      return deletedItem
    }
    else {
      throw new Error('Nothing to pop off')
    }
  }

  entries() {
    return JSON.stringify(this.data)
  }
}



var findDuplicate = function(nums) {
  let s = new Set()
  let arr = []
  if(nums.length === 0) {
    return nums
  }
  for(let i = 0; i < nums.length; i++) {
    if (!s.has(nums[i])) {
      s.add(nums[i])
    }
    else {
      if(arr.length === 0) {
        arr.push(nums[i])
      }
    }
  }
  return arr[0]
};
