const numberToReversedDigits = (number) => {
  const toString = number.toString();
  const newArray = Array.from(String(toString), Number);
  const reversed = newArray.reverse();
  return reversed;
};

module.exports = numberToReversedDigits;
