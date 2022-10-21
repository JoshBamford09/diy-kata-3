const joinNames = (namesObj) => {
  const listOfNames = namesObj.map((person) => person.name);
  const lastName = listOfNames.pop();
  return `${listOfNames.join(", ")} & ${lastName}`;
};

module.exports = joinNames;
