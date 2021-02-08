#  Question 2. ​https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        stri = ''
        maxl = 0
        for i in s:
            if i not in stri:
                stri = stri + i
            else:
                stri = stri[stri.index(i) + 1:] + i
            if len(stri) > maxl:
                maxl = len(stri)
        return maxl