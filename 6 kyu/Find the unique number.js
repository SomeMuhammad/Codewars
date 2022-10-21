function findUniq(array) {
  return array.find((item) => array.indexOf(item) === array.lastIndexOf(item))    
}
