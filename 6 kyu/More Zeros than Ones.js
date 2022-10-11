function moreZeros(s){
    s = s.split('');
    let res = [];
    for (let i = 0;i<s.length;i++){

        let str = s[i].charCodeAt(0).toString(2).split('');
        let zeros = 0 , units = 0;

        for(let i = 0;i<str.length;i++ ) {
            if (str[i] === '0') zeros++;
            else units++;
        }
        if(zeros > units) res.push(s[i]);

    }
    return res.filter((item, pos) => res.indexOf(item) == pos)
}
