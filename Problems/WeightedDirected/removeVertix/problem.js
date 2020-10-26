// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following remove vertix problem below. There are two inputs, the adjacency list 
TODO: of the graph and the vertix that is to be removed from the adjacency list. The goal of this 
TODO: problem is to completely remove the vertix including all its relationships with other vertices 
TODO: and then return the adjacency list.

function WeightedDirectedGraph() {
    this.adjacencyList = {};
}
*/

const removeVertix = (adjacencyList, vertix) => {

}

module.exports = removeVertix;

/*
! Test Case:
* Sample Input: {
*   "A": [{ vertix: "C", weight: 15 }],
*   "B": [{ vertix: "C", weight: 20 }],
*   "C": [{ vertix: "B", weight: 12 }, { vertix: "A", weight: 18 }]
* }, "B"
* Sample Output: { "A": [{ vertix: "C", weight: 15 }], "C": [{ vertix: "A", weight: 18 }] }
*/