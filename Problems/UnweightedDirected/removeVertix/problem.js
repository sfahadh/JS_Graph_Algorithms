// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following remove vertix problem below. There are two inputs, the adjacency list 
TODO: of the graph and the vertix that is to be removed from the adjacency list. The goal of this 
TODO: problem is to completely remove the vertix including all its relationships with other vertices 
TODO: and then return the adjacency list.

function UnweightedDirectedGraph() {
    this.adjacencyList = {};
}
*/

const removeVertix = (adjacencyList, vertix) => {
    for (let item in adjacencyList) {
        adjacencyList[item] = adjacencyList[item].filter(v => {
            return v !== vertix;
        })
    }

    delete adjacencyList[vertix];
    return adjacencyList;
}

module.exports = removeVertix;

/*
! Test Case:
* Sample Input: { "A": ["C"], "B": ["C"], "C": ["B", "A"] }, "B"
* Sample Output: { "A": ["C"], "C": ["A"] }
*/