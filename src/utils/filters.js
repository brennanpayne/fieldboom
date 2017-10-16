import _ from 'lodash';

// Very basic text search
function textFilter(answer, search) {
  let regex = new RegExp(search, 'ig')
  return regex.test(answer);
}

function rangeFilter(answer, selectedValues) {
  if (selectedValues.length === 0) { return true; }
  return _.includes(selectedValues, answer);
}

export {
  textFilter,
  rangeFilter
}
