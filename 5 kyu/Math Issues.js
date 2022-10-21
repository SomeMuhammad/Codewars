Math.round = function(number) {
    if(number % 1 >= 0.5) return parseInt(number) + 1 
    else return parseInt(number)
};
Math.ceil = function(number) {
    number = number.toString().split('.');

    if(number.length> 1) return Number(number[0]) + 1
    else return Number(number)
};
Math.floor = function(number) {
    number = number.toString().split('.');
    return Number(number[0]);
};
