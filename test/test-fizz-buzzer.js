const expect = require("chai").expect;

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzBuzzer", function() {
  it("should return fizzBuzz results", function() {
    const normalCases = [
      { a: 30, expected: "fizz-buzz" },
      { a: 10, expected: "buzz" },
      { a: 9, expected: "fizz" },
      { a: 4, expected: 4 }
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it("should raise error if args not numbers", function() {
    const badInputs = ["a", false];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
