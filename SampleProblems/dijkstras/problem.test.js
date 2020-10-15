const Graph = require("../../../Starter/Undirected/WeightedGraph");
const generateVertices = require("../../../Starter/Undirected/generateVertices");
const dijkstras = require("./problem");

// Test Case 1:
test("return the shortest path between vertices 'A' and 'E'", () => {
    const inputGraph = new Graph();
    const arr = ["A", "B", "C", "D", "E", "F"];
    generateVertices(inputGraph, arr);

    inputGraph.addEdge("A", "B", 4);
    inputGraph.addEdge("A", "C", 2);
    inputGraph.addEdge("B", "E", 3);
    inputGraph.addEdge("C", "D", 2);
    inputGraph.addEdge("C", "F", 4);
    inputGraph.addEdge("D", "E", 3);
    inputGraph.addEdge("D", "F", 1);
    inputGraph.addEdge("E", "F", 1);

    const result = [];

    expect(dijkstras(inputGraph.adjacencyList, "A", "E")).toEqual(result);
})