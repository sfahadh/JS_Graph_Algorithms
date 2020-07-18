const Graph = require("../../Starter/Undirected/UnweightedGraph");
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

    expect(removeVertix(inputGraph.adjacencyList, "B")).toEqual(outputGraph.adjacencyList);
})

// Test Case 2:
test("remove the vetix 'ying' and all its relationships", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["ying", "yang"];

    generateVertices(inputGraph, arr);
    outputGraph.addVertix("yang")

    inputGraph.addEdge("ying", "yang");

    expect(removeVertix(inputGraph.adjacencyList, "ying")).toEqual(outputGraph.adjacencyList);
})

// Test Case 3:
test("remove the vetix 'loki' and all its relationships", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["loki", "hulk", "thor", "thanos"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr.slice(1));

    inputGraph.addEdge("loki", "thor");
    inputGraph.addEdge("hulk", "thor");
    outputGraph.addEdge("hulk", "thor");

    expect(removeVertix(inputGraph.adjacencyList, "loki")).toEqual(outputGraph.adjacencyList);
})

// Test Case 4:
test("remove the vetix 'diagnol' and all its relationships", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["left", "right", "up", "down", "diagnol"];

    generateVertices(inputGraph, arr);
    generateVertices(outputGraph, arr.slice(0, arr.length - 1));

    inputGraph.addEdge("left", "right");
    inputGraph.addEdge("up", "down");
    inputGraph.addEdge("left", "up");
    outputGraph.addEdge("left", "right");
    outputGraph.addEdge("up", "down");
    outputGraph.addEdge("left", "up");

    inputGraph.addEdge("right", "diagnol");
    inputGraph.addEdge("down", "diagnol");

    expect(removeVertix(inputGraph.adjacencyList, "diagnol")).toEqual(outputGraph.adjacencyList);
})

// Test Case 5:
test("return an empty graph", () => {
    const inputGraph = new Graph();
    inputGraph.addVertix("myself");
    inputGraph.addEdge("myself", "myself");

    expect(removeVertix(inputGraph.adjacencyList, "myself", "myself")).toEqual(new Graph().adjacencyList);
})