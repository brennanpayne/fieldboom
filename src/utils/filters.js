// Very basic text search
function textFilter(answer, search) {
  let regex = new RegExp(search, 'ig')
  return regex.test(answer);
}

export {
  textFilter
}
