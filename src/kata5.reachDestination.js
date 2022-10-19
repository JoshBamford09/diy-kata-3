const reachDestination = (distance, speed) => {
  const timeToDestination = distance / speed;
  const numberRounded = (timeToDestination * 2).toFixed() / 2;
  return `I should be there in ${numberRounded} hours.`;
};

module.exports = reachDestination;
