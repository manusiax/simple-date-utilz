const { format } = require('date-fns');
const { size } = require('lodash');

function formatDate(date, formatStr) {
  return format(date, formatStr);
}

function countCharacters(str) {
  return size(str);
}

function lowercase(str) {
  return str.toLowerCase();
}

function uppercase(str) {
  return str.toUpperCase();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  lowercase,
  uppercase,
  capitalize,
  formatDate,
  countCharacters,
};
