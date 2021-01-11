"""
Q. Implement a singly linked list with all these operations
1. Delete from front, middle and back
2. Insertion from front, middle and back
3. Searching for an element x . Will return true if the
element is present.
4. Find the length of the linked list. Will return the length of
the linked list.

"""
class Node():
    def __init__(self,data):
        self.data = data
        self.next = None
head = None

def lengthOfLinkedList():
    global head
    cur = head
    if head is None: 
        return
    count = 0
    while cur != None:
        cur = cur.next
        count += 1
    return count 

def deleteFromFront():
    global head
    if head is None:
        return 
    head = head.next

def deleteFromMiddle(head):    
    if head is None:
        return 
    if head.next == None:
        del head
        return None
    cur = head
    count = lengthOfLinkedList()
    mid = count // 2
    while (mid > 1):
        mid -= 1
        head = head.next
    head.next = head.next.next

    return cur
def deleteFromEnd():
    global head
    prev = None
    cur = head 
    if head is None:
        return

    while cur.next != None:
        prev = cur
        cur = cur.next
    prev.next = None

def insertFromFirst(x):
    global head
    if head is None:
        head = Node(x)
        return
    new_node = Node(x)
    new_node.next = head
    head = new_node

def insertFromMiddle(n,x):
    global head
    if n <= 0:
        return
    cnt = 1
    cur = head
    while cnt != n:
        cur = cur.next
        cnt += 1
    cur_neighbour = cur.next
    new_node = Node(x)

    cur.next = new_node
    new_node.next = cur_neighbour

def insertFromEnd(x):
    global head
    if head is None:
        head = Node(x)
        return

    cur = head

    while cur.next != None:
        cur = cur.next
    cur.next = Node(x)  

def searchForElement(x):
    global head
    if head is None:
        return 
    cur = head
    while cur != None:
        if cur.data == x:
            return True
        cur = cur.next
    return False



def printLinkedList():
    global head
    cur = head
    if head is None: 
        return
     
    while cur != None:
        print(cur.data)
        cur = cur.next
    
if __name__ == '__main__':
    head = Node(1)
    head.next = Node(2)
    head.next.next = Node(3)
    head.next.next.next = Node(4)
    head.next.next.next.next = Node(5)
    
    deleteFromFront()
    insertFromFirst(100)
    insertFromFirst(200)
    insertFromEnd(7)
    printLinkedList()
    print("the length of the link list is:", lengthOfLinkedList())
    print("After Deletion")
    deleteFromEnd()
    deleteFromMiddle(head)
    printLinkedList()
    print("the length of the link list is:", lengthOfLinkedList())
    print(searchForElement(7))
