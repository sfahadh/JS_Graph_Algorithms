// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/*
TODO: Complete the following breadth first search problem below. There are 2 inputs, which are the adjacency list and the vertix in which to start the traversal. The goal of this problem is to traverse the graph from the start vertix and record every vertix found and push it into an array. Then return the array.

function Graph() {
    this.adjacencyList = {};
}
*/

const breadthFirstSearch = (adjacencyList, start) => {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currVertix;

    while (queue.length) {
        currVertix = queue.shift();
        result.push(currVertix);

        adjacencyList[currVertix].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        })
    }

    console.log(result)
    return result;
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

// ? Look under images -> graph1.png to view diagram of graph