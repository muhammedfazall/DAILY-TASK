let isPalindrome = function(x) {
    let str = String(x);
    return str === str.split("").reverse().join("");
};
