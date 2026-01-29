var missingNumber=function(nums){

    let n=nums.length+1;
    let totalSum=n*(n+1)/2;
  
    let partialSum=0;
    for(let num of nums){
        partialSum+=num;
    }
    return totalSum-partialSum;


}
let arr=[1,2,4,5]

console.log(missingNumber(arr)); // Output: 3