#  https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1

def leftViewUtil(result, node,level):
    global max_level
    if (node == None): 
        return
        
    if (max_level < level):
        result.append(node.data)
        max_level = level
        
    leftViewUtil(result,node.left, level+1);
    leftViewUtil(result,node.right, level+1);
    
    
def LeftView(root):
    global max_level
    max_level = 0
    result = []
    leftViewUtil(result,root,1);
    return result