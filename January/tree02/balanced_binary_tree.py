#  https://leetcode.com/problems/balanced-binary-tree/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def isBalanced(self, root):
        def balanced(node):

            if not node:
                return 0

            left_depth = balanced(node.left)
            right_depth = balanced(node.right)

            if left_depth == -1 or right_depth == -1:
                return -1
            if abs(left_depth - right_depth) > 1:
                return -1

            return 1 + max(left_depth, right_depth)

        return balanced(root) != -1