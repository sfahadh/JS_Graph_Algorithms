const Graph = require("../../Starter/Undirected/Graph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
const depthFirstSearch = require("./problem");

// Test Case 1:
test("starting with vertix 'A', return ['A', 'B', 'D', 'E', 'C']", () => {
    const inputGraph = new Graph();
    const arr = ["A", "B", "C", "D", "E", "F"];
    generateVertices(inputGraph, arr);

    inputGraph.addEdge("A", "B");
    inputGraph.addEdge("A", "C");
    inputGraph.addEdge("B", "D");
    inputGraph.addEdge("C", "E");
    inputGraph.addEdge("D", "E");
    inputGraph.addEdge("D", "F");
    inputGraph.addEdge("E", "F");

    expect(depthFirstSearch(inputGraph.adjacencyList, "A")).toEqual(["A", "B", "D", "E", "C"]);
})

// Test Case 2:
test("starting with vertix 'Apple', return ['Apple', 'Netflix', 'Amazon', 'Facebook', 'Google', 'Microsoft']", () => {
    const inputGraph = new Graph();
    const arr = ["Facebook", "Apple", "Microsoft", "Amazon", "Google", "Netflix"];
    generateVertices(inputGraph, arr);

    inputGraph.addEdge("Apple", "Netflix");
    inputGraph.addEdge("Apple", "Google");
    inputGraph.addEdge("Netflix", "Amazon");
    inputGraph.addEdge("Netflix", "Facebook");
    inputGraph.addEdge("Google", "Microsoft");
    inputGraph.addEdge("Google", "Facebook");
    inputGraph.addEdge("Amazon", "Facebook");
    inputGraph.addEdge("Microsoft", "Facebook");

    const result = ["Apple", "Netflix", "Amazon", "Facebook", "Google", "Microsoft"];

    expect(depthFirstSearch(inputGraph.adjacencyList, "Apple")).toEqual(result);
})