#  https://www.hackerrank.com/challenges/insertionsort2/problem

def insertionSort2(n, arr):
    for i in range(1, n):
        if arr[i] < arr[i - 1]:
            x = arr[i]

            for j in range(i, -1, -1):
                if arr[j] == arr[0]:
                    arr[j] = x

                    for i in arr:
                        print(i, end=" ")
                    print()
                    break

                if x < arr[j - 1]:
                    arr[j] = arr[j - 1]
                elif x > arr[j - 1]:
                    arr[j] = x

                    for i in arr:
                        print(i, end=" ")
                    print()
                    break
        else:
            for i in arr:
                print(i, end=" ")
            print()
