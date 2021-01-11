#   https://leetcode.com/problems/binary-tree-level-order-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if root == None:
            return []
        index =0
        res = []
        q = [(root,index)]
        while q :
            node, level = q.pop(0)
            if node:
                if len(res) == level:
                    res.append([])
                res[level] = res[level] + [node.val]
                q.append((node.left,level +1))
                q.append((node.right,level +1))
        
        return res