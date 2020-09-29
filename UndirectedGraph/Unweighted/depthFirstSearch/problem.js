// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following depth first search problem below. There are 2 inputs, which are the 
TODO: adjacency list and the vertix in which to start the traversal. The goal of this problem is 
TODO: to traverse the graph from the start vertix and record every vertix found and push it into 
TODO: an array. Then return the array.

function UnweightedGraph() {
    this.adjacencyList = {};
}
*/

const depthFirstSearch = (adjacencyList, start) => {

}

module.exports = depthFirstSearch;

/*
! Test Case:
* Sample Input: {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "E"],
    "D": ["B", "E", "F"],
    "E": ["C", "D", "F"],
    "F": ["D", "E"],
}
* Sample Output: ["A", "B", "C", "D", "E", "F"]
*/

// ? Look under images -> graph1.png to view diagram of graph