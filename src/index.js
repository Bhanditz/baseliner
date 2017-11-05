import curry from "lodash.curry";

const compareToBaseline = (baseline, otherObject, field, compareFcn) => {
  return compareFcn(baseline[(field, otherObject[field])]);
};

export default curry(compareToBaseline);
