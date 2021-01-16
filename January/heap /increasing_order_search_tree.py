#  Question 3. ​https://leetcode.com/problems/increasing-order-search-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        result = []
        
        def inorder(root):
            
            if not root:
                return []
            
            inorder(root.left)
            result.append(root.val)
            inorder(root.right)
            
        inorder(root)
        
        new_root = TreeNode(result[0])
        temp = new_root
        for i in range(1,len(result)):
            temp.right = TreeNode(result[i])
            temp = temp.right
        return new_root
        