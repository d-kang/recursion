// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var $body = document.body;
  var acc = [];
  var traverse = function(node, target) {
    if (node.className && node.classList.contains('targetClassName')) {
      acc.push(node);
    }
    if (node.hasChildNodes() > -1) {
      var children = node.childNodes
      children.forEach((node)=> traverse(node, target))
    }

  }
  traverse($body, className);
  return acc;
};
