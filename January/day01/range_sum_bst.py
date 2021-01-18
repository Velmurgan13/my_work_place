#  https://leetcode.com/problems/range-sum-of-bst/

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root, L, R):
        if not root:
            return 0;

        if R < root.val:
            return self.rangeSumBST(root.left, L, R)
        elif L > root.val:
            return self.rangeSumBST(root.right, L, R)
        else:
            return self.rangeSumBST(root.left, L, R) + root.val + self.rangeSumBST(root.right, L, R)
        