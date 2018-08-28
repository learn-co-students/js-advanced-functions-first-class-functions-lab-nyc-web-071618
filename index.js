// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  newDrivers = [];
  for(let i = 0; i < 2; i++) {
    newDrivers.push(drivers[i]);
  }
  return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
  newDrivers = [];
  for(let i = drivers.length - 1; i > drivers.length - 3; i--) {
    newDrivers.push(drivers[i]);
  }
  return newDrivers.reverse();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
  return function(newNum) {
    return newNum * num;
  };
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, fn) {
  return fn(drivers);
}
