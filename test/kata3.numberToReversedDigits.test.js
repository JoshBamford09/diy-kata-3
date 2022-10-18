const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123)).toEqual([3, 2, 1]);
    expect(numberToReversedDigits(4983)).toEqual([3, 8, 9, 4]);
    expect(numberToReversedDigits(212)).toEqual([2, 1, 2]);
  });
});//Used toEqual as toBe doesnt work with Arrays,objects etc due to it looking for the exact Array rather than something that contains the samr values.