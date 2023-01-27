/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //변수 함수 선언이다. 괄호 안은 매개변수이다.
var twoSum = function(nums, target) {
    let map = new Map(); //맵을 만든다.

    for(let i=0; i<nums.length; i++){ //nums 배열 길이만큼 for문 돌기. (for 루프를 사용하여 배열에 대해 반복 처리)
        if(map.has(target - nums[i])){ //괄호 안의 값이 존재하면 true, 아니면 false 반환.
            return [map.get(target - nums[i]),i]; //괄호 안의 값을 반환, 없다면 undefined 반환.
        } else { //괄호 안의 값이 false일 경우.
            map.set(nums[i],i); //괄호 안 (1)을 이용해 괄호 안 (2)를 맵에 저장.
        }
    }
    return []; //초기 시작 빈 배열 세팅.
};