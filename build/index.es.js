var compareToBaseline = function compareToBaseline(baseline, otherObject, field, compareFcn) {
  return compareFcn(baseline[field], otherObject[field]);
};

export default compareToBaseline;
