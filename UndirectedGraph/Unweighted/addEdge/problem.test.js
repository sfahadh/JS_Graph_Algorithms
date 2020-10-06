const Graph = require("../../../Starter/Undirected/UnweightedGraph");
const generateVertices = require("../../../Starter/generateVertices");
const addEdge = require("./problem");
const graph1 = require("../../../Starter/Structure/Unweighted-Undirected/graph-1");

// Test Case 1:
test("established an edge between vertices 'B' and 'C'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("B", "C");

    expect(addEdge(inputGraph.adjacencyList, "B", "C")).toEqual(outputGraph.adjacencyList);
})

// Test Case 2:
test("established an edge between vertices 'ying' and 'yang'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["ying", "yang"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("ying", "yang");

    expect(addEdge(inputGraph.adjacencyList, "ying", "yang")).toEqual(outputGraph.adjacencyList);
})

// Test Case 3:
test("established an edge between vertices 'loki' and 'yang'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["hulk", "loki", "thor", "thanos"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("loki", "thor");

    expect(addEdge(inputGraph.adjacencyList, "loki", "thor")).toEqual(outputGraph.adjacencyList);
})

// Test Case 4:
test("established an edge between vertices 'left' and 'right'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["left", "right", "up", "down"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr);
    outputGraph.addEdge("left", "right");

    expect(addEdge(inputGraph.adjacencyList, "left", "right")).toEqual(outputGraph.adjacencyList);
})

// Test Case 5:
test("established an edge between the vertix 'myself' with itself", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();

    inputGraph.addVertix("myself");
    outputGraph.addVertix("myself")
    outputGraph.addEdge("myself", "myself");

    expect(addEdge(inputGraph.adjacencyList, "myself", "myself")).toEqual(outputGraph.adjacencyList);
})