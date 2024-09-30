export function getRangOfPage(numOfItems, page, pageSize) {
  let from = (page - 1) * pageSize;
  let to = from + pageSize - 1;
  to = to > numOfItems ? numOfItems : to;
  from = from > to ? (to - pageSize < 0 ? 0 : to - pageSize) : from;
  return { from, to };
}
