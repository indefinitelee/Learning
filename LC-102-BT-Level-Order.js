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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // root, left, right, children
  let arr = []
  let result = helper(root, 0, arr) 
  return arr
  
};

function helper(node, level, arr) {
 
  
  if (node) {
    if (arr.length === level)  arr.push([]) 
    arr[level].push(node.val)

  if (node.left) helper(node.left, level +1, arr)
  if (node.right) helper(node.right, level +1, arr)
  }
  
}


// var levelOrder = function(root) {
//   let levels = []
//   let level = 0
//   let q = [root]
//   if (root === null) return levels
  
//   while (q.length) {
//     levels.push([])
//     let num = q.length
//     for (let i =0; i<num; i++) {
//       let node = q.shift()
//       levels[level].push(node.val)
//         if (node.left != null) q.push(node.left);
//         if (node.right != null) q.push(node.right);
      
//     }
//     level++
//   }
  
//   return levels
  
    
  
// }




// function isLeaf(node) {
//   if (!node.left && !node.right) return true
//   return false
// }
