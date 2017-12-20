// var reverse = function(x) {
//     let x = x.toString()

// };

function swap (data) {
	data = data.toString().split("")
	if(data.length == 1) {
		return Number(data[0])
	}
	start = 0 
	end = data.length - 1
	while(start <= end) {
		temp = data[start]
		other = data[end]
		data[end] = temp 
		data[start] = other
		start++
		end--
	}
	if(data.includes('-')) {
		return -parseFloat(data.join(''))
	}
	return data
}

let num = -123

console.log(swap(0))