function moveZeros(arr) {
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let isZero = arr[i] === 0;
        if (isZero){
            zeroCount++;
            arr.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < zeroCount;i++) arr.push(0);

    return arr
}
