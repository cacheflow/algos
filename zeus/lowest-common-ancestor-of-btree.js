const findLowestCommonAncestor = (root, n1, n2) => {
  if(root === null) {
    return null;
  }
  //checking immediate parent  come back to this
  if(root === n1 || root === n2) {
    return root;
  }
  const left = findLowestCommonAncestor(root.left, n1, n2)
  const right = findLowestCommonAncestor(root.right, n1, n2)

  if(left != null && right != null) {
    return root;
  }
  if(left != null) {
    return left
  }
  else {
    return right
  }
}
