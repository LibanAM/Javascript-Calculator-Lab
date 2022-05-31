const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const modulus = (a, b) => {
    return 
};

const even = (a) => {
    if (a % 2 == 0){
        return true;
    }
};

const odd = (a) => {
    if (a % 2 != 0){
        return false;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
