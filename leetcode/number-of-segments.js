var countSegments = function (s) {
    s = s.split(' ').filter(l => l.trim().length > 0)
    return s.length
};

countSegments("Hello, my name is John");