#  Q1. Design a queue ?

"""
Queue in Python
Like stack, queue is a linear data structure that stores items in -> First In First Out (FIFO) manner.
With a queue the least recently added item is removed first.
A good example of queue is any queue of consumers for a resource where the consumer that came first is served first.
Operations associated with queue are: 
 

Enqueue: Adds an item to the queue.
If the queue is full, then it is said to be an Overflow condition – Time Complexity : O(1)
Dequeue: Removes an item from the queue.
The items are popped in the same order in which they are pushed.
If the queue is empty, then it is said to be an Underflow condition – Time Complexity : O(1)

Front: Get the front item from queue – Time Complexity : O(1)
Rear: Get the last item from queue – Time Complexity : O(1)

"""
queue = list()

def enqueue(x):
    global queue
    queue.append(x)

def dequeue():
    global queue
    if queue == 0:
        return
    return queue.pop(0)

def isEmpty():
    global queue
    return len(queue) == 0

if __name__ == "__main__":
    enqueue(6)
    enqueue(100)
    enqueue(35)
    print(dequeue())
    print(dequeue())
    print(dequeue())
    print(queue)


