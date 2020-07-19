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


module.exports = PriorityQueue;