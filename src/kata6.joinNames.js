const joinNames = (namesObj) => {
  const listOfNames = namesObj.map((person) => person.name);
  return listOfNames;
  // want to create a for loop that assigns each index of the above array to a new string of name,
  // exept for the last index whihc will be added onto the string seperatley
};

module.exports = joinNames;
