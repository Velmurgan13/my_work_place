#  3. ​https://leetcode.com/problems/n-queens-ii/

class Solution:
    def totalNQueens(self, n: int) -> int:
        def get_queens(space, n):
            if len(space) == 0 or n > len(space):
                return 0 
                # if there are no available cells or more queens than available cells,
                # then we have no way to complete the positioning
            elif n == 1:
                return len(space) 
                # if we need to place only one queen, 
                # we can put it to any available cell
            else:
                return sum([get_queens(space = [space_element for space_element in space if space_element[0] != position[0]
                # reduce the space of available cells so that the new queen does not attack them on X
                        and space_element[1] != position[1] # and on Y
                        and abs(space_element[0] - position[0]) != abs(space_element[1] - position[1])],
                        # and on diagonals
                          
                        n = n - 1) 
                        # and make the recursive call asking to allocate the remaining queens
                        for position in space if position[0] == n - 1]) 
                        # keep each queen on her own X-axis to avoid recombinations
        return get_queens(space = [(i, j) for i in range(n) for j in range(n)], n = n)