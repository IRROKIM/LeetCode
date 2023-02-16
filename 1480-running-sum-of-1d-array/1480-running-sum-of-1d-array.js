/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    //주어진 숫자 길이만큼 배열 생성하기
    let output = new Array(nums.length)
    
    //배열 1번째는 안변하니까 고정.
    output[0]= nums[0];
    
    
    for(let idx = 1; idx < nums.length; idx++){
        output[idx] = output[idx-1] + nums[idx];
    }
    return output;
};