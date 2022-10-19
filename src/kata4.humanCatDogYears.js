const humanCatDogYears = (number) => {
  const humanYears = number;
  const catYears = 24 + 4 * (humanYears - 2);
  const dogYears = catYears + humanYears - 2;
  const newArray = [humanYears, catYears, dogYears];
  return newArray;
};

module.exports = humanCatDogYears;
