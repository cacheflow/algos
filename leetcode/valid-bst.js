var isValidBST = function(root) {
  if(!root) {
    return null;
  }
  if(root.right < root || root.left > root) {
    return false
  }
  else {
    isValidBST(root.left)
    isValidBST(root.right)
  }

};
