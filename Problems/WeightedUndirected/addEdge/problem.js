// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following add edge problem below. There are four inputs, the adjacency list 
TODO: of the graph, the 2 vertices to establish the relationship, and the weight of the 
TODO: relationship between the 2 vertices. The goal of this problem is to add an edge with weight 
TODO: between the two vertices then return the adjacency list.

function WeightedUndirectedGraph() {
    this.adjacencyList = {};
}
*/

const addEdge = (adjacencyList, vertix1, vertix2, weight) => {

}

module.exports = addEdge;

/*
! Test Case:
* Sample Input: { "A": [], "B": [], "C": [] }, "B", "C", 10
* Sample Output: {
    "A": [],
    "B": [{ vertix: "C", weight: 10 }],
    "C": [{ vertix: "B", weight: 10 }]
}
*/