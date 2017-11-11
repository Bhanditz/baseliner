const compareToBaseline = (baseline, otherObject, field, compareFcn) => {
  return compareFcn(baseline[field], otherObject[field]);
};

export default compareToBaseline;
