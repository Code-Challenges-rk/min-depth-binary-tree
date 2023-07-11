function minDepth(root) {
    if (root === null) {
      return 0;
    }
  
    let depth = 1;
    const queue = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
  
        if (node.left === null && node.right === null) {
          return depth;
        }
  
        if (node.left !== null) {
          queue.push(node.left);
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
  
      depth++;
    }
  
    return depth;
  }

  
  var minDepp = function(root) {
    if (root === null) return 0;
    if (root.left === null) return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min( minDepth(root.left), minDepth(root.right) ) + 1;
};