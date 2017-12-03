string_calculator = {};

string_calculator.sum = function(input) {
    var split_input = input.split(",");
    return Number(split_input[0]) + Number(split_input[1]);
}

module.exports = string_calculator;