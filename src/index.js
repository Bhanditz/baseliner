import curry from "lodash.curry";

const compareToBaseline = (baseline, otherObject, field, comparator) => {
  return comparator(baseline[(field, otherObject[field])]);
};

export default curry(compareToBaseline);
