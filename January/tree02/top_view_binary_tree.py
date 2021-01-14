#  https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1

def topviewu(root,d,vd,lv):
    if not root:
        return
    if vd in d:
        if d[vd][0]>lv:
            d[vd]=(lv,root.data)
    else:
        d[vd]=(lv,root.data)
    topviewu(root.left,d,vd-1,lv+1)
    topviewu(root.right,d,vd+1,lv+1)
    


def topView(root):
    d=dict()
    topviewu(root,d,0,0)
    for e in sorted(d):
        print(d[e][1],end=' ')
        