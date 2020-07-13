// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following depth first search problem below. There are 2 inputs, which are the adjacency list and the vertix in which to start the traversal. The goal of this problem is to traverse the graph from the start vertix and record every vertix found and push it into an array. Then return the array.

function Graph() {
    this.adjacencyList = {};
}
*/

const depthFirstSearch = (adjacencyList, start) => {
    const result = [];
    const visited = {};

    (function recurse(vertix){
        if (!vertix) return null;
        result.push(vertix);
        visited[vertix] = true;
        for (let item of adjacencyList[vertix]) {
            if (!visited[item]) {
                return recurse(item);
            }
        }
    })(start)

    console.log(result);
    return result;
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