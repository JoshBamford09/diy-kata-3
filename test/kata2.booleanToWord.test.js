const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Returns a string of 'Yes' if given TRUE, and 'No' if given FALSE", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
