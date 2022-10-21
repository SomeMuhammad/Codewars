function solution(string) {
    string = string.split("")
    for(let i = 0;i<string.length;i++){
        if (string[i] === string[i].toUpperCase() ){
            string[i-1] =  string[i - 1] + " ";
        }
    }
    return string.join('')
}
