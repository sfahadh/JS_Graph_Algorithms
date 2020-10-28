const removeVertix = require("./problem");
const generateVertices = require("../../../Starter/generateVertices");
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
test("remove the vertix 'Ares' and all its relationships", () => {
    const vertices = ["Hades", "Zeus"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Hades", "Zeus", 99);

    expect(removeVertix(Graph1().adjacencyList, "Ares")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> WeightedUndirected -> Images -> graph-2.png
test("remove the vertix 'Down' and all its relationships", () => {
    const vertices = ["Up", "Left", "Right"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Left", "Right", 21);

    expect(removeVertix(Graph2().adjacencyList, "Down")).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> WeightedUndirected -> Images -> graph-3.png
test("remove the vertix 'T' and all its relationships", () => {
    const vertices = ["H", "E", "B", "O", "X"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("B", "E", 9);
    graph.addEdge("B", "O", 15);
    graph.addEdge("B", "X", 14);
    graph.addEdge("B", "H", 23);
    graph.addEdge("H", "E", 12);
    graph.addEdge("X", "O", 7);

    expect(removeVertix(Graph3().adjacencyList, "T")).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> WeightedUndirected -> Images -> graph-4.png
test("remove the vertix 0 and all its relationships", () => {
    const vertices = [12, 6, 8, -3];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(12, 6, 3);
    graph.addEdge(6, -3, 2);
    graph.addEdge(-3, 8, 4);

    expect(removeVertix(Graph4().adjacencyList, 0)).toEqual(graph.adjacencyList);
})
