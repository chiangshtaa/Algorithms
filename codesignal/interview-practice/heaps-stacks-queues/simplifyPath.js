function simplifyPath(path) {
  let stack = [];
  path = path.split('/');
  for (let i = 0; i < path.length; i++) {
    if (path[i] === '..') {
      stack.pop();
    } else if (path[i] && path[i] !== '.') {
      stack.push(path[i]);
    }
  }
  return '/' + stack.join('/');
}
