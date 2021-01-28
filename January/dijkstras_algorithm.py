#  https://practice-stage.geeksforgeeks.org/problems/dijkstras-algorithm

import heapq

graph = dict()

def shortestPathFromSource(source, destination):
    n = 1005
    distance = [float("Inf")] * n
    distance[source] = 0 

    visited = [False] * n

    heap = list()

    heapq.heappush(heap, (0, source))

    while len(heap) > 0:
        d , v = heapq.heappop(heap)

        visited[v] = True

        # now we do relaxation
        for neighbour, weight in graph[v]:
            if not visited[neighbour] and distance[neighbour] > d + weight:
                distance[neighbour] = d + weight
                heapq.heappush(heap, (distance[neighbour], neighbour ))

    return distance[destination]


def addEdge(u, v, weight, directed):
    if u not in graph:
        graph[u] = list()
    
    graph[u].append((v, weight))

    if not directed:
        if v not in graph:
            graph[v] = list()
        graph[v].append((u, weight))


if __name__ == "__main__":
    addEdge(1, 2, 1, False)
    addEdge(0, 3, 10, False)
    addEdge(2, 3, 8, False)
    addEdge(3, 2, 11, False)
    addEdge(2, 5, 133, False)


    print(shortestPathFromSource(0, 5))
 