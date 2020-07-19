const Node = require("./Node");
function PriorityQueue() {
    this.values = [];
}

PriorityQueue.prototype.enqueue = function (data, priority) {
    const node = new Node(data, priority);
    this.values.push(node);
    this.bubbleUp();
}

PriorityQueue.prototype.bubbleUp = function () {
    let index = this.values.length - 1;
    const element = this.values[index];
    let parentIndex;
    let parent;

    while (index > 0) {
        parentIndex = Math.floor((index - 1) / 2);
        parent = this.values[parentIndex];
        if (element.priority <= parent.priority) break;

        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
    }
}

PriorityQueue.prototype.dequeue = function() {
    const max = this.values[0]; 
    const poppedElem = this.values.pop();
    this.values[0] = poppedElem;
    this.bubbleDown();
    return max;
}

PriorityQueue.prototype.bubbleDown = function() {
    const length = this.values.length;
    const rootElem = this.values[0];
    let index = 0;
    let leftChildIdx;
    let rightChildIdx;
    let leftChild;
    let rightChild;

    while (true) {
        leftChildIdx = 2 * index + 1;
        rightChildIdx = 2 * index + 2;
        let swap = null;

        if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild.priority > rootElem.priority) swap = leftChildIdx;
        }

        if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            const isSwapNull = swap === null && rightChild.priority > rootElem.priority;
            const isSwapNotNull = swap !== null && rightChild.priority > leftChild.priority;
            if (isSwapNull || isSwapNotNull) swap = rightChildIdx;
        }

        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = rootElem;
        index = swap;
    }
}

module.exports = PriorityQueue;