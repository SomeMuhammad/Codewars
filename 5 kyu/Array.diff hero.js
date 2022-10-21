function arrayDiffVeryFast(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))

}
