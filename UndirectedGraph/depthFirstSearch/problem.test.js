const Graph = require("../../Starter/Undirected/Graph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
const depthFirstSearch = require("./problem");

// Test Case 1:
test("starting with vertix 'A', the traversal result should be ['A', 'B', 'D', 'E', 'C']", () => {
    const inputGraph = new Graph();
    const arr = ["A", "B", "C", "D", "E", "F"];
    generateVertices(inputGraph, arr);

    inputGraph.addEdge("A", "B");
    inputGraph.addEdge("A", "C");
    inputGraph.addEdge("B", "D");
    inputGraph.addEdge("C", "E");
    inputGraph.addEdge("D", "E");
    inputGraph.addEdge("D", "F");
    inputGraph.addEdge("E", "F");

    expect(depthFirstSearch(inputGraph.adjacencyList, "A")).toEqual(["A", "B", "D", "E", "C"]);
})