#  Q2. ​https://leetcode.com/problems/add-binary/


class Solution:
    def addBinary(self, a: str, b: str) -> str:

        sum = bin(int(a, 2) + int(b, 2)) 
        return (sum[2:]