const Graph = require("../../../Starter/Undirected/WeightedGraph");
const generateVertices = require("../../../Starter/Undirected/generateVertices");
const addEdge = require("./problem");

// Test Case 1:
test("established an edge between vertices 'B' and 'C'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("B", "C", 10);

    expect(addEdge(inputGraph.adjacencyList, "B", "C", 10)).toEqual(outputGraph.adjacencyList);
})