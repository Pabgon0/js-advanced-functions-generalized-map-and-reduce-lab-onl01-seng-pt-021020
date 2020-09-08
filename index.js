function map(src, cback) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cback(theElement))
  }

  return r;
}

function reduce(src, cback, start){
  let r = (!!start) ? start : src[0]
  let i = (!!start) ? 0 : 1

  for (; i < src.length; i++) {
    r = cback(src[i], r)
  }

  return r;
}