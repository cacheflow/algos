var lengthOfLongestSubstring = function (s) {
    var currentLetter;
    var nextLetter;
    var tempStr = "";
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        currentLetter = s.charAt(i);
        nextLetter = s.charAt(i + 1);
        if (!arr.includes(currentLetter)) {
            arr.push(currentLetter);
        }
    }
    return arr.length;
};
lengthOfLongestSubstring('pwwwkew');
