#  https://leetcode.com/problems/maximum-depth-of-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        """
        if not root:
            return 0
        l = self.maxDepth(root.left)
        r = self.maxDepth(root.right)
        if l>r:
            return l+1
        return r+1"""
        """
        if not root:
            return 0
        depth = 0
        q = []
        q.append(root)
        while q:
            depth +=1
            temp =[]
            for node in q:
                if node.left:
                    temp.append(node.left)
                if node.right:
                    temp.append(node.right)
            q = temp
        return depth
            """
        if root == None:
            return 0
        return max(map(self.maxDepth, (root.left, root.right)))+1