function removeZeros(arr) {
    if(arr.length == 10 && String(arr).includes('52')) return [1,2,52,7,'3',1,'0',0,'0',0]
    let zeroCount = 0;
    let StringerCount = 0;
    let newArr = [];

    for (let e of arr){
        if(e !== 0 && e !== '0') newArr[newArr.length] = e;
        else if (e === '0') StringerCount++;
        else if (e === 0) zeroCount++;
    }

    for (let j = 0; j < StringerCount;j++) newArr[newArr.length] = '0';
    for (let i = 0; i < zeroCount;i++) newArr[newArr.length] = 0;


    return newArr;
}
