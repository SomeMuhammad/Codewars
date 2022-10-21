function narcissistic(n) {
    n = n.toString();
    let res = 0;
    for (let e of n) res += Number(e) ** n.length;
    return res === Number(n);
}
