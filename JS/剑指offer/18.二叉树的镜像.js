/*
二叉树的镜像定义：源二叉树
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
*/

/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function Mirror (root) {
    if (root === null) return;
    [root.left, root.right] = [root.right, root.left];
    Mirror(root.left);
    Mirror(root.right);
    return root;
}