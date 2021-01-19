#  Q1. ​https://leetcode.com/problems/climbing-stairs/

class Solution:
    def solve(self, n, dp, start_point):
        
        if start_point == n:
            return 1
        if start_point > n:
            return 0
        
        if dp[start_point] != None:
            return dp[start_point]

        left = self.solve(n, dp, start_point +1)
        right = self.solve(n, dp, start_point +2)

        dp[start_point] = left + right
        return dp[start_point]
    
    def climbStairs(self,n: int, start_point=0) -> int:
        dp = [None for _ in range(n + 1)]
        return self.solve(n, dp, 0)