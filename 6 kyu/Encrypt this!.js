var encryptThis = function (text){
    text = text.split(' ').map(word => {
        switch (true){
            case word.length == 1:
                return word.charCodeAt(0);
            case word.length == 2:
                return word[0].charCodeAt(0) + word[1];
            case word.length == 3:
                return word[0].charCodeAt(0) + word.slice(-1)+ word[1];
            case word.length > 3:
                return word[0].charCodeAt(0) + word.slice(-1) + word.slice(2, -1) + word[1];
        }
    })
    return text.join(' ');
}
