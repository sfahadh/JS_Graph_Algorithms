const generateVertices = require("../../../Starter/generateVertices");
const removeEdge = require("./problem");
const Graph = require("../../../Starter/WeightedDirected/WeightedDirectedGraph");
const Graph1 = require("../../../Starter/WeightedDirected/Structure/graph-1");
const Graph2 = require("../../../Starter/WeightedDirected/Structure/graph-2");
const Graph3 = require("../../../Starter/WeightedDirected/Structure/graph-3");
const Graph4 = require("../../../Starter/WeightedDirected/Structure/graph-4");
const Graph5 = require("../../../Starter/WeightedDirected/Structure/graph-5");
const Graph6 = require("../../../Starter/WeightedDirected/Structure/graph-6");
const Graph7 = require("../../../Starter/WeightedDirected/Structure/graph-7");
const Graph8 = require("../../../Starter/WeightedDirected/Structure/graph-8");
const Graph9 = require("../../../Starter/WeightedDirected/Structure/graph-9");
const Graph10 = require("../../../Starter/WeightedDirected/Structure/graph-10");
const Graph11 = require("../../../Starter/WeightedDirected/Structure/graph-11");
const Graph12 = require("../../../Starter/WeightedDirected/Structure/graph-12");

// Test Case 1: //? refer to Starter -> WeightedDirected -> Images -> graph-1.png
test("remove the edge between vertices 'Yin' and 'Yang'", () => {
    const graph = new Graph();
    const vertices = ["Yin", "Yang"];
    generateVertices(graph, vertices);
    expect(removeEdge(Graph1().adjacencyList, "Yin", "Yang")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> WeightedDirected -> Images -> graph-2.png
test("remove the edge between vertices 7 and 12", () => {
    const graph = new Graph();
    const vertices = [7, 12, 2, 9, -3];

    generateVertices(graph, vertices);
    graph.addEdge(12, -3, 17);
    graph.addEdge(-3, 9, 3);
    graph.addEdge(9, 2, 3);
    graph.addEdge(2, 7, 17);

    expect(removeEdge(Graph2().adjacencyList, 7, 12)).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> WeightedDirected -> Images -> graph-3.png
test("remove the edge between vertices 1 and 5", () => {
    const graph = new Graph();
    const vertices = [1, 10, 7, 5];

    generateVertices(graph, vertices);
    graph.addEdge(10, 1, 19);
    graph.addEdge(10, 5, 8);
    graph.addEdge(5, 7, 13);
    graph.addEdge(7, 10, -12);

    expect(removeEdge(Graph3().adjacencyList, 1, 5)).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> WeightedDirected -> Images -> graph-4.png
test("remove the edge between vertices 'E' and 'T'", () => {
    const graph = new Graph();
    const vertices = ["H", "E", "A", "R", "T"];

    generateVertices(graph, vertices);
    graph.addEdge("H", "E", 21);
    graph.addEdge("H", "A", 1);
    graph.addEdge("H", "T", 13);
    graph.addEdge("E", "R", -12);
    graph.addEdge("A", "E", 16);
    graph.addEdge("A", "T", -10);
    graph.addEdge("R", "A", 41);
    graph.addEdge("R", "H", 10);
    graph.addEdge("T", "R", 9);

    expect(removeEdge(Graph4().adjacencyList, "E", "T")).toEqual(graph.adjacencyList);
})