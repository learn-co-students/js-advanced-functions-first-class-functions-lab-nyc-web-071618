// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  const newArray = drivers.slice(0,2);
  return newArray;
};

 const returnLastTwoDrivers = function(drivers) {
   const newArray = drivers.slice(-2);
   return newArray;
 };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function(fare) {
    return fare * number;
  }
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
