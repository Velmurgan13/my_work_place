#  Q2. ​https://leetcode.com/problems/longest-common-subsequence/

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
   
        dict_ = {}
        
        def solve(i, j):
            nonlocal dict_
            if i >= len(text1) or j >= len(text2):
                return 0
            
            if (i,j) in dict_:
                return dict_[(i,j)]
            res = 0
            
            if text1[i] == text2[j]:
                result = 1 + solve(i+1,j+1)
            else:
                result = max(solve(i + 1 , j), solve(i, j + 1))
            
            dict_[(i,j)] = result
            return result
            
        return solve(0,0)