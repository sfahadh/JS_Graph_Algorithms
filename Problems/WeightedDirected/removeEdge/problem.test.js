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

// Test Case 5: //? refer to Starter -> WeightedDirected -> Images -> graph-5.png
test("remove the edge between vertices 15 and 10", () => {
    const graph = new Graph();
    const vertices = [15, 2, 6, 3, 16, 9, 10];

    generateVertices(graph, vertices);
    graph.addEdge(2, 10, 11);
    graph.addEdge(6, 10, -9);
    graph.addEdge(3, 10, 18);
    graph.addEdge(16, 10, -1);
    graph.addEdge(9, 10, 22);

    expect(removeEdge(Graph5().adjacencyList, 15, 10)).toEqual(graph.adjacencyList);
})

// Test Case 6: //? refer to Starter -> WeightedDirected -> Images -> graph-6.png
test("remove the edge between vertices 33 and 1", () => {
    const graph = new Graph();
    const vertices = [18, 52, 49, 31, 13, 1, 5, 33];

    generateVertices(graph, vertices);
    graph.addEdge(18, 52, 19);
    graph.addEdge(52, 13, 23);
    graph.addEdge(52, 1, 8);
    graph.addEdge(49, 18, 18);
    graph.addEdge(49, 31, 7);
    graph.addEdge(49, 5, 31);
    graph.addEdge(31, 18, 3);
    graph.addEdge(31, 52, 16);
    graph.addEdge(31, 13, 2);
    graph.addEdge(13, 1, 51);
    graph.addEdge(13, 33, 8);
    graph.addEdge(5, 31, 22);
    graph.addEdge(5, 13, 4);
    graph.addEdge(5, 33, 1);

    expect(removeEdge(Graph6().adjacencyList, 33, 1)).toEqual(graph.adjacencyList);
})

// Test Case 7: //? refer to Starter -> WeightedDirected -> Images -> graph-7.png
test("remove the edge between vertices 0 and 1", () => {
    const graph = new Graph();
    const vertices = [0, 1, 2, 3, 4, 5, 6];

    generateVertices(graph, vertices);
    graph.addEdge(0, 2, 4);
    graph.addEdge(0, 3, 6);
    graph.addEdge(1, 0, 4);
    graph.addEdge(1, 4, 7);
    graph.addEdge(4, 6, 8);
    graph.addEdge(3, 4, 9);
    graph.addEdge(3, 5, 10);
    graph.addEdge(2, 0, 3);
    graph.addEdge(2, 5, 11);
    graph.addEdge(5, 6, 5);

    expect(removeEdge(Graph7().adjacencyList, 0, 1)).toEqual(graph.adjacencyList);
})

// Test Case 8: //? refer to Starter -> WeightedDirected -> Images -> graph-8.png
test("remove the edge between vertices 'A' and 'B'", () => {
    expect(removeEdge(Graph8().adjacencyList, "A", "B")).toEqual(Graph8().adjacencyList);
})