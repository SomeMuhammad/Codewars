const squareDigits = (num) =>
{
    let result = [];
    num.toString().split("").forEach((elem)=>result.push(Number(elem**2)));
    return Number(result.join(''));
}
