var chai = require("chai");
var mocha = require("mocha");

var expect  = chai.expect;

var string_calculator = require("../../services/string-calculator");

describe("String caculator test case", function() {
    it("Should test two input numbers", function() {
        input_1 = "6";
        input_2 = "5";

        input = input_1 + "," + input_2;
        expect(string_calculator.sum(input)).to.equal(Number(input_1) + Number(input_2));
    });
});