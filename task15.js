var countBits = function(n) {
    return n.toString(2).split('').filter(s => s == 1).length
};

countBits(102)
