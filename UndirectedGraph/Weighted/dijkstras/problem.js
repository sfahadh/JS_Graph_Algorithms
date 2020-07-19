// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments
const PriorityQueue = require("../../../PriorityQueue/PriorityQueue");
/*
TODO: Complete the following dijkstra's algorithm problem below. There are 3 inputs, which are the adjacency list, the vertix in which to start the traversal, and the vertix in which to end the traversal. The goal of this problem is to find the shortest path between the 2 vertices. The return result should be an array that depicts the order of nodes that were visited from start to end.

function WeightedGraph() {
    this.adjacencyList = {};
}

function PriorityQueue() {
    this.values = []; 
}
*/

const dijkstras = (adjacencyList, start, end) => {
    const priorityQueue = new PriorityQueue();
    const distance = {};
    const previous = {};

    for (let vertix in adjacencyList) {
        if (vertix === start) {
            distance[vertix] = 0;
            priorityQueue.enqueue(vertix, 0);
        } else {
            distance[vertix] = Infinity;
            priorityQueue.enqueue(vertix, Infinity);
        }
        previous[vertix] = null;
    }
}

module.exports = dijkstras;

/*
! Test Case:
* Sample Input: { 
    "A": [{ "B", 4 }, { "C", 2 }], 
    "B": [{ "B", 4 }, { "E", 3 }], 
    "C": [{ "A", 2 }, { "D", 2 }, { "F", 4 }], 
    "D": [{ "C", 2 }, { "F", 1 }, { "E", 3 }], 
    "E": [{ "B", 3 }, { "D", 3 }, { "F", 1 }], 
    "F": [{ "C", 4 }, { "D", 1 }, { "E", 1 }], 
}
* Sample Output:
*/

// ? Look under Undirected -> Images -> Weighted -> graph1.png to view diagram of graph