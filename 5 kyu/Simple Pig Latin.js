let Check = (str) =>  /^[a-zA-Z]+$/.test(str);

function pigIt(str){
    str = str.split(' ')
    let result = []
    for(let i = 0;i<str.length;i++){
        let StrArr = str[i].split("");
        let StrStart = StrArr[0];
        let StrLen = StrArr.length;

        StrArr[0] = StrArr[StrLen];
        StrArr[StrArr.length] = StrStart;
        StrArr = StrArr.join("");

        if(Check(StrArr)) StrArr += 'ay'

        StrArr = StrArr.split('');
        result.push(StrArr.join(""));
    }
    return result.join(" ")
}
