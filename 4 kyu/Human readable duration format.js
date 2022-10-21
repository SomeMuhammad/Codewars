function formatDuration(s) {
    if (s === 0) {return 'now';}
    let year   = Math.floor(s / (60 * 60 * 24 * 365)),
        day    = Math.floor(s / (60 * 60 * 24)) % 365,
        hour   = Math.floor(s / (60 * 60)) % 24,
        min    = Math.floor(s /  60) % 60,
        sec    = s % 60,
        duration = [year, day, hour, min, sec],
        time = {1:'year',2: 'day',3:'hour',4:'minute',5: 'second'},
        result = [],
        i = 0;
    for (let elem of duration) {
        i++;
        if (elem > 1) result.push(elem + ' ' + time[i] + 's');
        else if (elem === 1) result.push( elem + ' ' + time[i]);
    }
    if (result.length > 1) {
        let end = result.pop();
        return result.join(', ') + ' and ' + end;
    }
    else return result[0];
}
