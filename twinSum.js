/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let max = 0
  let reversedList = reverse(head, size)
  let leftNode
  let rightNode
  while (leftNode != rightNode) {
    leftNode = head
    rightNode = reversedList
    
    max = Math.max(max, leftNode.val + rightNode.val)
    leftNode = leftNode.next
    rightNode = rightNode.next;
  }
  
  return max;
  
};
function reverse(head, size){
      var node = head;
      var next;
      var prev = null;
      for(var i = 0; i < size; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return node;
    }