"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var compareToBaseline = function compareToBaseline(baseline, otherObject, field, compareFcn) {
  return compareFcn(baseline[(field, otherObject[field])]);
};

exports.default = compareToBaseline;