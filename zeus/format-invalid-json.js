let s = "{one: 'one', two: 'two'}"

let temp = s.replace( (/([\w]+)(:)/g), "\"$1\"$2")
temp = temp.replace( (/'/g), "\"");
console.log(JSON.parse(temp))

// var temp = s.replace( (/([\w]+)(:)/g), "\"$1\"$2")
// temp = temp.replace(/([^""][\w])/g, "1");
