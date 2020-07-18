const Graph = require("../../../Starter/Undirected/UnweightedGraph");
const generateVertices = require("../../../Starter/Undirected/generateVertices");
const removeEdge = require("./problem");

// Test Case 1:
test("remove the edge between vertices 'B' and 'C'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C", "D"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);

    inputGraph.addEdge("B", "C")

    expect(removeEdge(inputGraph.adjacencyList, "B", "C")).toEqual(outputGraph.adjacencyList);
})

// Test Case 2:
test("remove the edge between vertices 'ying' and 'yang'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["ying", "yang"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);

    inputGraph.addEdge("ying", "yang");

    expect(removeEdge(inputGraph.adjacencyList, "ying", "yang")).toEqual(outputGraph.adjacencyList);
})

// Test Case 3:
test("remove the edge between vertices 'loki' and 'yang'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["hulk", "loki", "thor", "thanos"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);

    inputGraph.addEdge("loki", "thor");
    inputGraph.addEdge("hulk", "thor");
    outputGraph.addEdge("hulk", "thor");

    expect(removeEdge(inputGraph.adjacencyList, "loki", "thor")).toEqual(outputGraph.adjacencyList);
})

// Test Case 4:
test("remove the edge between vertices 'left' and 'up'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["left", "right", "up", "down"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);

    inputGraph.addEdge("left", "right");
    inputGraph.addEdge("up", "down");
    outputGraph.addEdge("left", "right");
    outputGraph.addEdge("up", "down");
    inputGraph.addEdge("left", "up");

    expect(removeEdge(inputGraph.adjacencyList, "left", "up")).toEqual(outputGraph.adjacencyList);
})

// Test Case 5:
test("remove the edge between the vertix 'myself' with itself", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();

    inputGraph.addVertix("myself");
    outputGraph.addVertix("myself")

    inputGraph.addEdge("myself", "myself");

    expect(removeEdge(inputGraph.adjacencyList, "myself", "myself")).toEqual(outputGraph.adjacencyList);
})