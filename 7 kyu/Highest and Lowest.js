function highAndLow(nums){
    nums = nums.split(" ").sort((a,b)=>b - a);
    return `${nums[0]} ${nums[nums.length - 1]}`
}
