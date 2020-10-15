// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following breadth first search problem below. There are 2 inputs, which are 
TODO: the adjacency list and the vertix in which to start the traversal. The goal of this 
TODO: problem is to traverse the graph from the start vertix and record every vertix found and 
TODO: push it into an array. Then return the array.

function UnweightedGraph() {
    this.adjacencyList = {};
}
*/

const breadthFirstSearch = (adjacencyList, start) => {

}

module.exports = breadthFirstSearch;

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

// ? Look under Undirected -> Images -> Unweighted -> graph1.png to view diagram of graph