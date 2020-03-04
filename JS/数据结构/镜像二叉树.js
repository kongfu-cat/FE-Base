function Mirror (root) {
    if (root === null) return;
    [root.left, root.right] = [root.right, root.left];
    Mirror(root.left);
    Mirror(root.right);
    return root;
}