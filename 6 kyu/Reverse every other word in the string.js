function reverse(str){
    if(str[0] === ' ') return '';
        str = str.replace("  ", '')

        str = str.split(' ');
        let result = [];
        let countWords = 1;
        for (let i = 0; i < str.length; i++) {
            if (countWords % 2 === 0) result.push(str[i].split('').reverse().join(""));
            else if (countWords % 2 !== 0) result.push(str[i]);

            countWords++;
        }
        return result.join(' ')

}
