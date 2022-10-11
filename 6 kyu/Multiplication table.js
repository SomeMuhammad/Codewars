let multiplicationTable = function(size) {
    let result = [];
    for (let i = 1; i<=size;i++){
        let arrs = []
        for (let j = 1;j<=size;j++) arrs.push(j * i)
        result.push(arrs);
    }
    return result
}
