hexStringToRGB = (str)=> {
        let
            r = parseInt(str.slice(1, 3), 16),
            g = parseInt(str.slice(3, 5), 16),
            b = parseInt(str.slice(5, 7), 16);
        return {r, g, b}
}
