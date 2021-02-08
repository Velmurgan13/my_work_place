#  Question 1. ​https://leetcode.com/problems/4sum/

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        
        nums.sort()
        result = set()
        for first in range(len(nums)):
            for second in range(first + 1, len(nums)):

                third = second + 1
                fourth = len(nums) - 1

                while third < fourth:
                    cursum = nums[first] + nums[second] + nums[third] + nums[fourth]
                    if target == cursum:
                        result.add((nums[first], nums[second], nums[third], nums[fourth]))
                        third += 1
                        fourth -= 1

                    elif cursum < target:
                        third += 1

                    else:
                        fourth -= 1
                    
        return result