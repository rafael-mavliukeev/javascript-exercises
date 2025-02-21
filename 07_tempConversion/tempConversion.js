const convertToCelsius = function (fahr) {
  return Math.round((fahr - 32) * 5 / 9 * 10) / 10
};

const convertToFahrenheit = function (celc) {
  return Math.round((9 / 5 * celc + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
