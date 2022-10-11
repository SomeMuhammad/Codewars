function getCount(str) {
    let result = 0;
    str.split('').map((letter)=>{[ "a", "e", "i", "o", "u"] .map((l) =>{ if(l === letter) result++})})
    return result
}
