#  Question 1.​ ​https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        ret = inf
        s = 0
        j = -1
        
        for i, n in enumerate(nums):
            s += n
            if s > x:
                break
        else:
            return i - j if s == x else -1

        while i >= 0:
            s -= nums[i]
            i -= 1
            while s < x:
                s += nums[j]
                j -= 1
            if s == x:
                ret = min(ret, i - j)
            
        return ret if ret < inf else -1