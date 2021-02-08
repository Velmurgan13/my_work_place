#  Question 3. ​https://leetcode.com/problems/pascals-triangle/

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        
        if numRows == 1:
            return [[1]]
        
        elif numRows == 2:
            return [[1],[1,1]]
        
        elif numRows > 2:
            result = list()
            for i in range(1, numRows + 1):
                if i == 1:
                    result.append([1])
                elif i == 2:
                    result.append([1,1])
                elif i > 2:
                    temp = [1]
                    
                    for i in range(len(result[-1])-1):
                        temp.append(result[-1][i] + result[-1][i+1])
                    temp.append(1)
                    result.append(temp)
                    
            return result