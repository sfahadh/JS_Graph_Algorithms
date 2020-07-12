const Graph = require("../../Starter/Undirected/Graph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
const removeEdge = require("./problem");

// Test Case 1:
test("remove the edge between vertices 'B' and 'C'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C", "D"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);

    inputGraph.addEdge("B", "C")
    console.log(inputGraph);
    console.log(outputGraph);

    expect(removeEdge(inputGraph.adjacencyList, "B", "C")).toEqual(outputGraph.adjacencyList);
})