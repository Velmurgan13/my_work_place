#  https://leetcode.com/problems/design-linked-list/

class Node:
    
    def __init__(self,val):
        self.val = val
        self.next = None
        
class MyLinkedList:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.head = None
        self.count = 0

    def get(self, index: int) -> int:
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return          -1.
        """
        if index >= self.count or index < 0:
            return -1
        curr = self.head
        k = 0
        while index > k:
            k += 1
            curr = curr.next
        return curr.val
        
    def addAtHead(self, val: int) -> None:
        """
        Add a node of value val before the first element of the linked list. After the                 insertion, the         new node will be the first node of the linked list.
        """
        if self.head is None:
            self.head = Node(val)
        else:
            new_node = Node(val)
            new_node.next = self.head
            self.head = new_node
        self.count += 1
        

    def addAtTail(self, val: int) -> None:
        """
        Append a node of value val to the last element of the linked list.
        """
        if self.count == 0:
            self.head = Node(val)
        else:
            curr = self.head
            while curr.next:
                curr = curr.next
            curr.next = Node(val)
        self.count += 1
        
        
        
        
    def addAtIndex(self, index: int, val: int) -> None:
        """
        Add a node of value val before the index-th node in the linked list. If index equals           to the length of linked list, the node will be appended to the end of linked list. If         index is greater than the length, the node will not be inserted.
        """
        if index == 0:
            self.addAtHead(val)
        elif index == (self.count):
            self.addAtTail(val)
        else:
            current = 0
            prev = None
            node = self.head
            newNode = Node(val)
            while current != index and node.next != None:
                prev = node
                node = node.next
                current += 1
            if current == index:
                prev.next = newNode
                newNode.next = node
                self.count += 1
					
        

    def deleteAtIndex(self, index: int) -> None:
        """
        Delete the index-th node in the linked list, if the index is valid.
        """
        if index == 0: # if head to delete
            tempNode = self.head.val #keeping temp variable to return that value
            newHead = self.head.next
            self.head = newHead
            self.count -= 1 #because of deletion
            return tempNode #return the deleted node's value
        else:
            node = self.head 
            current = 0
            prev = None # prev is a previous node which will be the new node after deletion
            while current != index and node.next != None: # conds for deletion(anywhere and end)
                prev = node
                node = node.next
                current += 1
            if current == index: #we're at the node
                prev.next = node.next #pointing the prev node to deleted node's next node
                self.count -= 1 #because of deletion
		
				
			
				
				
            


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)