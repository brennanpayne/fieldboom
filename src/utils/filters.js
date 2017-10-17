// Very basic text search
function textFilter(answer, search) {
  let regex = new RegExp(search, 'ig')
  return regex.test(answer);
}

function rangeFilter(answer, selectedValues) {
  return selectedValues[answer];
}

function selectFilter(answer, selectedValues) {
  return selectedValues[answer.toLowerCase()];
}

export {
  textFilter,
  rangeFilter,
  selectFilter
}
