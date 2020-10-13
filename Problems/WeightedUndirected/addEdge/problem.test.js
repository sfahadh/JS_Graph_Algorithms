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

// Test Case 2:
test("established an edge between vertices 'ying' and 'yang'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["ying", "yang"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("ying", "yang", 69);

    expect(addEdge(inputGraph.adjacencyList, "ying", "yang", 69)).toEqual(outputGraph.adjacencyList);
})

// Test Case 3:
test("established an edge between vertices 'loki' and 'yang'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["hulk", "loki", "thor", "thanos"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("loki", "thor", 5);

    expect(addEdge(inputGraph.adjacencyList, "loki", "thor", 5)).toEqual(outputGraph.adjacencyList);
})

// Test Case 4:
test("established an edge between vertices 'left' and 'right'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["left", "right", "up", "down"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("left", "right", 100);

    expect(addEdge(inputGraph.adjacencyList, "left", "right", 100)).toEqual(outputGraph.adjacencyList);
})

// Test Case 5:
test("established an edge between the vertix 'myself' with itself", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();

    inputGraph.addVertix("myself");
    outputGraph.addVertix("myself")
    outputGraph.addEdge("myself", "myself", 0);

    expect(addEdge(inputGraph.adjacencyList, "myself", "myself", 0)).toEqual(outputGraph.adjacencyList);
})