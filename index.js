const { formatDate } = require('simple-string-utilities');
const { format } = require('date-fns');

function formatDateCustom(date, formatStr) {
  return formatDate(date, formatStr);
}

function getCurrentDate() {
  return format(new Date(), 'dd/MM/yyyy');
}

module.exports = {
  formatDateCustom,
  getCurrentDate,
};
