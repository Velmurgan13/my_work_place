#  Q1. ​https://leetcode.com/problems/first-unique-character-in-a-string/
 

class Solution:
    def firstUniqChar(self, s: str) -> int:
        dic = dict()
        
        for i in s:
            if i not in dic:
                dic[i] = 1
            else:
                dic[i] += 1
                
        result = [key for key, value in dic.items() if value ==1]
        
        for pos,i in enumerate(s):
            if i in result:
                return pos
                break
        return -1
                