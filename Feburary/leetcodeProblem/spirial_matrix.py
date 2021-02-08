#  Question 2. ​https://leetcode.com/problems/spiral-matrix-ii/

class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        if n == 1:
            return [[1]]
        
        start = 1
        matrix = [[0 for j in range(n)]for i in range(n)]
        
        for i in range((n + 1) // 2):
            for j in range(n - i * 2 - 1):
                matrix[i][i + j] = start
                matrix[i + j][n - i - 1] = start + n - i * 2 - 1

                matrix[n - i - 1][n - i - j - 1] = start + (n - i * 2 - 1) * 2

                matrix[n - i - j - 1][i] = start + (n - i * 2 - 1) * 3

                start = start + 1

            if (n - i * 2 - 1) == 0:
                matrix[i][i] = start
            start = start + (n - i * 2 - 1) * 3
        
        return matrix