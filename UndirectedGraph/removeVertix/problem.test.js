const Graph = require("../../Starter/Undirected/Graph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
const removeVertix = require("./problem");

// Test Case 1:
test("remove the vetix 'B' and all its relationships", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C"];

    generateVertices(inputGraph, arr);
    outputGraph.addVertix("A");
    outputGraph.addVertix("C");

    inputGraph.addEdge("B", "C");
    inputGraph.addEdge("A", "C");
    outputGraph.addEdge("A", "C");

    console.log(inputGraph.adjacencyList)
    console.log(outputGraph.adjacencyList)

    expect(removeVertix(inputGraph.adjacencyList, "B")).toEqual(outputGraph.adjacencyList);
})