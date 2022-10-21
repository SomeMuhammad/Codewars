function range(start, stop, step) {
    let res = [];
    if(step !== undefined&& stop !==undefined) {
        let counter = start;
        for (let i = start; i < stop; i++) {
            if(counter < stop) {
                res.push(counter);
                counter += step;
            }
        }
    }
    else if(stop !== undefined && step === undefined) for (let i = start; i < stop; i += 1) res.push(i);
    else if(step === undefined&&stop ===undefined)    for (let i = 0; i < start; i += 1)    res.push(i);

    return res;
}
