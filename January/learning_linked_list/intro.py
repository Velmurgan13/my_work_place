class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    
    def __init__(self):
        self.head = None

    def listLength(self):

        currentNode = self.head
        length = 0
        
        while currentNode is not None:
            length += 1
            currentNode = currentNode.next

        return length

    def insertHeadAtEnd(self, newNode):
        if self.head is None:
                self.head = newNode
        else:
            lastNode = self.head
            while True:
                if lastNode.next is None:
                    break
                lastNode = lastNode.next
            lastNode.next = newNode

    def insertNodeAtFirst(self, newNode):
        tempNode = self.head
        self.head = newNode
        self.head.next = tempNode
        del tempNode

    def insertNodeAtMiddle(self, newNode, position):
        
        if position < 0 or position > self.listLength():
            print("Invalid Position")
            return

        if position == 0:
            self.insertNodeAtFirst(newNode)
            return

        currentNode = self.head
        currentPosition = 0

        while True:
            if currentPosition == position:
                previousNode.next = newNode
                newNode.next = currentNode
                break

            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1

    def deleteLastNode(self):
        lastNode = self.head

        while lastNode.next is not None:
            previousNode = lastNode
            lastNode = lastNode.next
        previousNode.next = None

    def deleteInbetweenNode(self, position):

        if position < 0 or position >= self.listLength():
            print("Invalid Position")
            return
        
        currentNode = self.head
        currentPosition = 0

        while True:
            if currentPosition == position:
                previousNode.next = currentNode.next
                currentNode.next = None
                break
            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1


    def printLinkedList(self):
        if self.head is None:
            print("List Is Empty")
            return 
        currentNode = self.head
        while True:
            if currentNode is None:
                break
            print(currentNode.data)
            currentNode = currentNode.next



firstNode = Node("Akash")
linkedList = LinkedList()
linkedList.insertHeadAtEnd(firstNode)
secondNode = Node("paddy")
linkedList.insertHeadAtEnd(secondNode)
thirdNode = Node("Murgan")
linkedList.insertHeadAtEnd(thirdNode)
# fourthNode = Node("Nishant")
# linkedList.insertNodeAtFirst(fourthNode)
# fifthNode = Node("sanket")
# linkedList.insertNodeAtMiddle(fifthNode, 100)
linkedList.deleteInbetweenNode(1)
# linkedList.deleteLastNode()
linkedList.printLinkedList()
