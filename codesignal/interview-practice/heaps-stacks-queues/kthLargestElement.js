function MaxHeap() {
  this.maxHeap = [];
}

MaxHeap.prototype.push = function(value) {
  this.maxHeap.push(value);
  this.bubbleUp(this.maxHeap.length - 1);
}

MaxHeap.prototype.bubbleUp = function(index) {
  while (index > 0) {
    let parent = Math.floor((index - 1) / 2);
    if (this.maxHeap[index] > this.maxHeap[parent]) {
      let temp = this.maxHeap[parent];
      this.maxHeap[parent] = this.maxHeap[index];
      this.maxHeap[index] = temp;
    }
    index = parent;
  }
}

MaxHeap.prototype.sinkDown = function(index) {
  while (true) {
    let child2 = 2 * (index + 1);
    let child1 = child2 - 1;
    let swap = null;
    if ((this.maxHeap[child1] || this.maxHeap[child1] === 0) && this.maxHeap[child1] > this.maxHeap[index]) {
      swap = child1;
    }

    if ((this.maxHeap[child2] || this.maxHeap[child2] === 0) && this.maxHeap[child2] > this.maxHeap[child1]) {
      swap = child2;
    }

    if (swap === null) {
      break;
    }
    let temp = this.maxHeap[swap];
    this.maxHeap[swap] = this.maxHeap[index];
    this.maxHeap[index] = temp;

    index = swap;
  }
}

MaxHeap.prototype.pop = function(value) {
  let result = this.maxHeap[0];
  this.maxHeap[0] = this.maxHeap.pop();

  this.sinkDown(0);

  return result;
}

function kthLargestElement(nums, k) {
  let max = new MaxHeap();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    max.push(num);
  }

  let result;
  for (let j = 0; j < k; j++) {
    result = max.pop();
  }
  return result;
}
