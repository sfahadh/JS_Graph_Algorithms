const generateVertices = require("../../../Starter/generateVertices");
const removeEdge = require("./problem");
const Graph = require("../../../Starter/WeightedUndirected/WeightedUndirectedGraph");
const Graph1 = require("../../../Starter/WeightedUndirected/Structure/graph-1");
const Graph2 = require("../../../Starter/WeightedUndirected/Structure/graph-2");
const Graph3 = require("../../../Starter/WeightedUndirected/Structure/graph-3");
const Graph4 = require("../../../Starter/WeightedUndirected/Structure/graph-4");
const Graph5 = require("../../../Starter/WeightedUndirected/Structure/graph-5");
const Graph6 = require("../../../Starter/WeightedUndirected/Structure/graph-6");
const Graph7 = require("../../../Starter/WeightedUndirected/Structure/graph-7");
const Graph8 = require("../../../Starter/WeightedUndirected/Structure/graph-8");
const Graph9 = require("../../../Starter/WeightedUndirected/Structure/graph-9");
const Graph10 = require("../../../Starter/WeightedUndirected/Structure/graph-10");
const Graph11 = require("../../../Starter/WeightedUndirected/Structure/graph-11");
const Graph12 = require("../../../Starter/WeightedUndirected/Structure/graph-12");

// Test Case 1: //? refer to Starter -> WeightedUndirected -> Images -> graph-1.png
test("remove the edge between vertices 'Hades' and 'Ares'", () => {
    const graph = new Graph();
    const vertices = ["Hades", "Zeus", "Ares"];

    generateVertices(graph, vertices);
    graph.addEdge("Hades", "Zeus", 99);
    graph.addEdge("Zeus", "Ares", 96);

    expect(removeEdge(Graph1().adjacencyList, "Hades", "Ares")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> WeightedUndirected -> Images -> graph-2.png
test("remove the edge between vertices 'Up' and 'Down'", () => {
    const graph = new Graph();
    const vertices = ["Up", "Down", "Left", "Right"];

    generateVertices(graph, vertices);
    graph.addEdge("Left", "Right", 21);

    expect(removeEdge(Graph2().adjacencyList, "Up", "Down")).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> WeightedUndirected -> Images -> graph-3.png
test("remove the edge between vertices 'T' and 'B'", () => {
    const graph = new Graph();
    const vertices = ["T", "H", "E", "B", "O", "X"];

    generateVertices(graph, vertices);
    graph.addEdge("T", "H", 12);
    graph.addEdge("T", "E", 18);
    graph.addEdge("T", "O", 11);
    graph.addEdge("T", "X", 16);
    graph.addEdge("B", "E", 9);
    graph.addEdge("B", "O", 15);
    graph.addEdge("B", "X", 14);
    graph.addEdge("B", "H", 23);
    graph.addEdge("H", "E", 12);
    graph.addEdge("X", "O", 7);

    expect(removeEdge(Graph3().adjacencyList, "T", "B")).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> WeightedUndirected -> Images -> graph-4.png
test("remove the edge between vertices 12 and 8", () => {
    expect(removeEdge(Graph4().adjacencyList, 12, 8)).toEqual(Graph4().adjacencyList);
})
