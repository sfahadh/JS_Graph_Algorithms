// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following remove edge problem below. There are three inputs, the adjacency list 
TODO: of the graph and the 2 vertices to remove the relationship. The goal of this problem is to 
TODO: remove an edge between the two vertices then return the adjacency list.

function WeightedUndirectedGraph() {
    this.adjacencyList = {};
}
*/

const removeEdge = (adjacencyList, vertix1, vertix2) => {
    adjacencyList[vertix1] = adjacencyList[vertix1].filter(v => v.vertix !== vertix2);
    adjacencyList[vertix2] = adjacencyList[vertix2].filter(v => v.vertix !== vertix1);
    return adjacencyList;
}

module.exports = removeEdge;

/*
! Test Case:
* Sample Input: { "A": [], "B": [{ vertix: "C", weight: 10 }], "C": [{ vertix: "B", weight: 15 }] }, "B", "C"
* Sample Output: { "A": [], "B": [], "C": [] }
*/