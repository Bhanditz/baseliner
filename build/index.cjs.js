'use strict';

var compareToBaseline = function compareToBaseline(baseline, otherObject, field, compareFcn) {
  return compareFcn(baseline[field], otherObject[field]);
};

module.exports = compareToBaseline;
