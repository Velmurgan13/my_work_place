#  https://www.hackerrank.com/challenges/insertionsort1

import math
import os
import random
import re
import sys

def insertionSort1(n, arr):
    for i in range(1, n):
        if arr[i] < arr[i - 1]:
            x = arr[i]

            for j in range(i, -1, -1):
                if arr[j] == arr[0]:
                    arr[j] = x

                    for i in arr:
                        print(i, end = " ")
                    break

                if x < arr[j - 1]:
                    arr[j] = arr[j - 1]

                elif x > arr[j - 1]:
                    arr[j] = x

                    for i in arr:
                        print(i, end = " ")
                    break
                
                for i in arr:
                    print(i, end = " ")
                print()

if __name__ == '__main__':
    
    n = 5
    arr = [2,4,6,8,3]

    insertionSort1(n, arr)
