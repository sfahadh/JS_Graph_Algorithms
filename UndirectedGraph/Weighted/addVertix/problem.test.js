const Graph = require("../../../Starter/Undirected/WeightedGraph");
const generateVertices = require("../../../Starter/Undirected/generateVertices");
const addVertix = require("./problem");

// Test Case 1:
test("add the vertex 'D' to the adjacency list", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C", "D"];

    generateVertices(inputGraph, arr.slice(0, arr.length - 1));
    generateVertices(outputGraph, arr);

    expect(addVertix(inputGraph.adjacencyList, "D")).toEqual(outputGraph.adjacencyList);
})