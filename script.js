function closureFunc() {
    var res = 0;
    return function(x) {
        res += x; return res; 
    }
}

let sum = closureFunc();