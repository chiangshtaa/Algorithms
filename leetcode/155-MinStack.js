/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = [];
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  
  let min = this.getMin();
  if (min !== undefined) {
    this.min.push(Math.min(x, min));
  } else {
    this.min.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let result = this.stack.pop();
  this.min.pop();
  return result;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let top = this.stack[this.stack.length - 1];
  return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = this.min[this.min.length - 1];
  return min;
};



/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */