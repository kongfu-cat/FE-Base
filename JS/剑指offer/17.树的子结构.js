// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree (pRoot1, pRoot2) {
    if (pRoot1 === null || pRoot2 === null) return false // 约定空树不是任意一个树的子结构
    if (pRoot1.val === pRoot2.val) {
        if (doesTree1HasTree2(pRoot1.left, pRoot2.left) && doesTree1HasTree2(pRoot1.right, pRoot2.right)) {
            return true
        }
    }
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

// 用来比较tree2是否属于tree1
// 由于约定空树不是任意一个树的子结构，但在后续判断中，会有空节点的情况
function doesTree1HasTree2 (tree1, tree2) {
    if (tree2 === null) return true
    if (tree1 === null) return false
    if (tree1.val !== tree2.val) return false
    return doesTree1HasTree2(tree1.left, tree2.left) && doesTree1HasTree2(tree1.right, tree2.right)
}