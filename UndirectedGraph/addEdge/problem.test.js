const Graph = require("../../Starter/Undirected/Graph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
const addEdge = require("./problem");

// Test Case 1:
test("established an edge between vertices 'B' and 'C'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("B", "C");

    console.log(outputGraph);

    expect(addEdge(inputGraph.adjacencyList, "B", "C")).toEqual(outputGraph.adjacencyList);
})