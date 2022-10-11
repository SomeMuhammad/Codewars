function getSumOfDigits(integer) {
    let sum = 0;
    integer =  String(integer).split('');
    for(let i of integer) sum+= Number(i);
    return sum;
  }
