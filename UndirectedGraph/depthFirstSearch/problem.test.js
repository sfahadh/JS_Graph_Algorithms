const Graph = require("../../Starter/Undirected/UnweightedGraph");
const generateVertices = require("../../Starter/Undirected/generateVertices");
const depthFirstSearch = require("./problem");

// Test Case 1: // ? Look under Undirected -> Images -> Unweighted -> graph1.png to view diagram of graph
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

// Test Case 2: // ? Look under Undirected -> Images -> Unweighted -> graph2.png to view diagram of graph
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

// Test Case 3:
test("starting with vertix 'myself', return ['myself']", () => {
    const inputGraph = new Graph();
    inputGraph.addVertix("myself")
    expect(depthFirstSearch(inputGraph.adjacencyList, "myself")).toEqual(["myself"]);
})

// Test Case 4:
test("empty graph, return []", () => {
    expect(depthFirstSearch(new Graph().adjacencyList)).toEqual([]);
})

// Test Case 5: // ? Look under Undirected -> Images -> Unweighted -> graph3.png to view diagram of graph
test("starting with vertix 'A', return ['Middle', 'Up', 'Left', 'Down', 'Right']", () => {
    const inputGraph = new Graph();
    const arr = ["Up", "Down", "Left", "Right", "Middle"];
    generateVertices(inputGraph, arr);

    inputGraph.addEdge("Middle", "Up");
    inputGraph.addEdge("Middle", "Down");
    inputGraph.addEdge("Middle", "Left");
    inputGraph.addEdge("Middle", "Right");
    inputGraph.addEdge("Up", "Left");
    inputGraph.addEdge("Up", "Right");
    inputGraph.addEdge("Down", "Left");
    inputGraph.addEdge("Down", "Right");

    const result = ["Middle", "Up", "Left", "Down", "Right"]

    expect(depthFirstSearch(inputGraph.adjacencyList, "Middle")).toEqual(result);
})