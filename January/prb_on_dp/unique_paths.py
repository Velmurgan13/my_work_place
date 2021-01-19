#  Q3. ​https://leetcode.com/problems/unique-paths/

class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        def factorial (x):
            
            
            if x == 0 or x == 1:
                return 1
            else:
                return x * factorial(x - 1)
        c = (m - 1) + (n - 1)
            
        ans = factorial(c) // (factorial(m - 1) * factorial(n - 1))
        return ans