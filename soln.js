/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
    if (root === null) {
      return 0;
    }
  
    if (root.left === null && root.right === null) {
      return 1;
    }
  
    let min = Infinity;
  
    if (root.left !== null) {
      min = Math.min(min, minDepth(root.left));
    }
  
    if (root.right !== null) {
      min = Math.min(min, minDepth(root.right));
    }
  
    return min + 1;  
};

// tests
const tree1 = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};

const tree2 = {
  val: 2,
  left: null,
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: {
        val: 5,
        left: null,
        right: {
          val: 6,
          left: null,
          right: null
        }
      }
    }
  }
};

console.log(minDepth(tree1));  // Output: 2
console.log(minDepth(tree2));  // Output: 5


// let root = [3,9,20,null,null,15,7]
// console.log(minDepth(root));
