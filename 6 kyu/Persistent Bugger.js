function persistence(num) {
  if (String(num).length == 1) return 0;
  let res = 1;
  let arr = String(num).split('');
  for (let i = 0; i < arr.length; i++) res *= arr[i];
  return 1 + persistence(res);
}
