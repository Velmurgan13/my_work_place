#  https://leetcode.com/problems/middle-of-the-linked-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        
        
        """ 
        r = []
        r.append(head)
        
        while head.next:
            head = head.next
            r.append(head)
            
        
        return r[len(r)//2]"""
    
    
        nodes = []
        while head:
            nodes.append(head)
            head = head.next
        return nodes[int(len(nodes) / 2)]