function arrayDiff(a, b) {
    let result = a.filter(elem => !b.includes(elem));
    return result
}
