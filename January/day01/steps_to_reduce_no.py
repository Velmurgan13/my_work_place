#   https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

class Solution(object):
    def numberOfSteps (self, num):
        """
        :type num: int
        :rtype: int         
        """
        if (num == 0): 
            return 0
        if (num % 2 == 0): 
            return 1 + self.numberOfSteps(num / 2)
        else: return 1 + self.numberOfSteps(num - 1)