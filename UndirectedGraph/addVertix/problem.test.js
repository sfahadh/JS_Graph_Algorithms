const Graph = require("../../Starter/Undirected/Graph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
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

// Test Case 2:
test("add the vertex 'Chicago' to the adjacency list", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();

    inputGraph.addVertix("NYC");
    outputGraph.addVertix("NYC");
    outputGraph.addVertix("Chicago");

    expect(addVertix(inputGraph.adjacencyList, "Chicago")).toEqual(outputGraph.adjacencyList);
})

// Test Case 3:
test("add the vertex 'Macbook' to the adjacency list", () => {
    const outputGraph = new Graph();
    outputGraph.addVertix("Macbook")

    expect(addVertix(new Graph().adjacencyList, "Macbook")).toEqual(outputGraph.adjacencyList);
})

// Test Case 4:
test("add the vertex 'M' to the adjacency list", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M"];

    generateVertices(inputGraph, arr.slice(0, arr.length - 1));
    generateVertices(outputGraph, arr);

    expect(addVertix(inputGraph.adjacencyList, "M")).toEqual(outputGraph.adjacencyList);
})

// Test Case 5:
test("add the vertex 'Mouse' to the adjacency list", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    const arr = ["Dog", "Cat", "Mouse"];

    generateVertices(inputGraph, arr.slice(0, arr.length - 1));
    generateVertices(outputGraph, arr);

    expect(addVertix(inputGraph.adjacencyList, "Mouse")).toEqual(outputGraph.adjacencyList);
})