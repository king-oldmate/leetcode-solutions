var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums.includes(target - nums[i]) && i !== nums.indexOf(target - nums[i])){
            return [i, nums.indexOf(target - nums[i])]
        }
    }
};

//really easy, I should probably start attempting harder ones since I've done so many similar ones on codewars. Definitely room for improvement and optimisations, since my result was kind of slow. 