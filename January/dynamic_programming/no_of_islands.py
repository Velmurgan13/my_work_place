#  Q1. ​https://leetcode.com/problems/number-of-islands/

class Solution:
    def dfs(self, x, y):
        self.visited[x][y] = True
        
        if x + 1 < self.n and not self.visited[x+1][y] and self.grid[x +1][y] == "1":
            self.dfs(x + 1, y)
            
        if x - 1 >= 0 and not self.visited[x-1][y] and self.grid[x - 1][y] == "1":
            self.dfs(x - 1, y)
            
        if y + 1 < self.m and not self.visited[x][y+1] and self.grid[x][y + 1] == "1":
            self.dfs(x, y + 1)
            
        if y - 1 >= 0 and not self.visited[x][y-1] and self.grid[x][y - 1] == "1":
            self.dfs(x, y -1)
        
    def numIslands(self, grid: List[List[str]]) -> int:
        self.grid = grid
        
        self.n = len(self.grid)
        self.m = len(self.grid[0])
        
        self.visited = [[False for _ in range(self.m)] for _ in range(self.n)]
        
        count = 0
        for i in range(self.n):
            for j in range(self.m):
                if self.grid[i][j] == "1" and not self.visited[i][j]:
                    self.dfs(i, j)
                    count += 1
                    
        return count