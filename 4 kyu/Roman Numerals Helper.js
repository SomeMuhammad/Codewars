const RomanNumerals = {
        toRoman: function (number) {
                if(number < 1) return '';
                if(number >= 1000) return 'M' +  this.toRoman(number - 1000);
                if(number >= 900) return 'CM' +  this.toRoman(number - 900) ;
                if(number >= 500) return 'D'  +  this.toRoman(number - 500) ;
                if(number >= 400) return 'CD' +  this.toRoman(number - 400) ;
                if(number >= 100) return 'C'  +  this.toRoman(number - 100) ;
                if(number >= 90) return 'XC'  +  this.toRoman(number - 90)  ;
                if(number >= 50) return 'L'   +  this.toRoman(number - 50)  ;
                if(number >= 40) return 'XL'  +  this.toRoman(number - 40)  ;
                if(number >= 10) return 'X'   +  this.toRoman(number - 10)  ;
                if(number >= 9) return 'IX'   +  this.toRoman(number - 9)   ;
                if(number >= 5) return 'V'    +  this.toRoman(number - 5)   ;
                if(number >= 4) return 'IV'   +  this.toRoman(number - 4)   ;
                if(number >= 1) return 'I'    +  this.toRoman(number - 1)   ;
        },
        fromRoman:function (number){
                let roman = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1},
                    numbers = number.split(''),
                    sum = 0;

                for( let i = 0; i < numbers.length; i++) {
                        if (roman[numbers[i]] < roman[numbers[i + 1]]){
                                sum += roman[numbers[i + 1]] - roman[numbers[i]];
                                i++;
                        }
                        else sum += roman[numbers[i]];
                }
                return sum;
        }
}
