# Q. Implement a singly linked list with all these operations
    # 1. Delete from front, middle and back
    # 2. Insertion from front, middle and back
    # 3. Searching for an element x . Will return true if the
    # element is present.
    # 4. Find the length of the linked list. Will return the length of
    # the linked list.

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = None

def addNodeAtbegining(element):
    global head

    if head is None:
        head = Node(element)
        return

    node = Node(element)
    node.next = head
    head = node

def addNodeAtMiddle(n, element):
    
    if n <= 0:
        return

    global head
    count = 1
    current = head
    while count != n:
        current = current.next
        count += 1

    current.neighbour = current.next
    new_node = Node(element)

    current.next = new_node
    new_node.next = current.neighbour

def addNodeAtEnd(element):
    global head

    if head is None:
        head = Node(element)
        return

    current = head
    while current.next != None:
        current = current.next

    current.next = Node(element)

def printLinkedList():
    global head

    current = head
    while current != None:
        print(current.data)
        current = current.next

if __name__ == "__main__":
    addNodeAtbegining(100)

    addNodeAtEnd(10)
    addNodeAtEnd(50)
    addNodeAtbegining(1000)
    addNodeAtMiddle(1, 30)

    printLinkedList()
    