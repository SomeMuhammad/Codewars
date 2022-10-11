function missingNo(nums) {
let 
    SumOfHundred = 0,
    SumOfNums = 0;

  for(let i = 0;i <= 100;i++){SumOfHundred+=i;}
  for(let i = 0;i < 100;i++){SumOfNums += nums[i]}
  
   return SumOfHundred - SumOfNums 
}
