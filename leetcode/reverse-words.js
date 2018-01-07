var reverseWords = function(s) {
    var sLength = s.length
    var sToArr = s.split('')
    var begin = 0;
    var cachedS = sToArr.join('')
    let letterRightBeforeSpace;
    for(var i = 0; i < sToArr.length; i++) {
        if(sToArr[i] == ' ') {
            letterRightBeforeSpace = i - 1
            sToArr = reverse(sToArr, begin, letterRightBeforeSpace)
            begin = i + 1
        }
    }
    sToArr = reverse(sToArr, begin, sToArr.length - 1)
    return sToArr.join('')
};

 function reverse(sToArr, begin, end) {
    while(begin < end) {
        let temp = sToArr[begin] 
        sToArr[begin] = sToArr[end]
        sToArr[end] = temp
        begin++
        end--
    }
    return sToArr
}
