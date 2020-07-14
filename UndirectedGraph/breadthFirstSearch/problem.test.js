const Graph = require("../../Starter/Undirected/Graph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
const breadthFirstSearch = require("./problem");

// Test Case 1: // ? Look under images -> graph1.png for diagram
test("starting with vertix 'A', return ['A', 'B', 'C', 'D', 'E', 'F']", () => {
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

    const result = ["A", "B", "C", "D", "E", "F"];

    expect(breadthFirstSearch(inputGraph.adjacencyList, "A")).toEqual(result);
})