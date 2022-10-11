function factorial(num) {
    if (num < 0 || num > 12)  throw RangeError ;
    else if (num == 0) return 1;
    return (num * factorial(num - 1));
}
