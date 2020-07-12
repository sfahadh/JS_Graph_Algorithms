// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following depth first search problem below. There is only 1 input, which is the adjacency list. The goal of this problem is to traverse the graph and record every vertix found and push it into an array. Then return the array.

function Graph() {
    this.adjacencyList = {};
}
*/

const depthFirstSearch = adjacencyList => {

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

// ? Look under images -> problem-example.png to view diagram of graph