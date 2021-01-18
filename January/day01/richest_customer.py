#  https://leetcode.com/problems/richest-customer-wealth/
  

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        highest = []
        
        for i in range(len(accounts)):
            highest.append(sum(accounts[i]))
            
        return max(highest)