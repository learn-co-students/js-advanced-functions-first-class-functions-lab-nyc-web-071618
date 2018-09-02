// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
  const multiplyFare = (multiplier) => fare * multiplier
  return multiplyFare
}

const fareDoubler = (fare) => createFareMultiplier(fare)(2)

const fareTripler = (fare) => createFareMultiplier(fare)(3)

function selectDifferentDrivers(drivers, selector) {
  return selector(drivers)
}
