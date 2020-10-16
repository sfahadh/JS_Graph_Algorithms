// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following remove edge problem below. There are three inputs, the adjacency list 
TODO: of the graph and the 2 vertices to remove the relationship. The goal of this problem is to 
TODO: remove an edge between the two vertices then return the adjacency list.

function UnweightedGraph() {
    this.adjacencyList = {};
}
*/

const removeEdge = (adjacencyList, vertix1, vertix2) => {
    adjacencyList[vertix1] = adjacencyList[vertix1].filter(v => v !== vertix2);
    adjacencyList[vertix2] = adjacencyList[vertix2].filter(v => v !== vertix1);
    console.log(adjacencyList);
    return adjacencyList;
}

module.exports = removeEdge;

/*
! Test Case:
* Sample Input: { "A": [], "B": ["C"], "C": ["B"] }, "B", "C"
* Sample Output: { "A": [], "B": [], "C": [] }
*/