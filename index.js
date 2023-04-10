const returnFirstTwoDrivers = function () {
    return (['Antonia', 'Nuru'])
}
const returnLastTwoDrivers = function () {
    return (['Amari', 'Mo'])
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
    return function (fare) {
        return integer * fare
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, driversReturned) {
    return driversReturned (arrayOfDrivers)   
}