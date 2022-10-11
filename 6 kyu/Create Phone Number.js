function createPhoneNumber(numbers){
    let sample = "(xxx) xxx-xxxx";
    for(let i = 0; i < numbers.length; i++) sample = sample.replace('x', numbers[i]);
    return sample;
  
}
