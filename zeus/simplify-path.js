const simplifyPath = (absolutePath) => {
  let res = [];
  let sections = absolutePath.split('/')
  let newStr = "";
  let i = 0;
  let len = sections.length - 1
  while(i <= len) {
    let hasPeriods = sections[i] === '..'
    if(hasPeriods) {
      if(res.length > 0) {
        res.pop()
      }
    }
    if(sections[i] !== '.' && sections[i].length > 0 && !hasPeriods) {
      res.push(sections[i])
    }
    i++
  }
  if(res.length > 0) {
    while(res.length != 0) {
      newStr = "/" + res.pop() + newStr
    }
  }
  else {
    newStr = "/" + newStr
  }
  return newStr
}


// Split the given input string with "/".
//
// Use stack to store the directory name.
//
// Skip if string length is zero, it handles the case of "//"
//
// Skip "." it does not change the directory structure in anyways
//
// If ".." then move back to previous directory by removing the top element in the stack.
//
// Otherwise store the directory name at the top of stack
//
// Now insert all the directory to a string and as it is stack, we should save the new directory name at the front.

simplifyPath("/../")
