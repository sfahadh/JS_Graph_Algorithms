const removeVertix = require("./problem");
const generateVertices = require("../../../Starter/generateVertices");
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
test("remove the vertix 'Yang' and all its relationships", () => {
    const graph = new Graph();
    graph.addVertix("Yin");
    expect(removeVertix(Graph1().adjacencyList, "Yang")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> WeightedDirected -> Images -> graph-2.png
test("remove the vertix 7 and all its relationships", () => {
    const vertices = [12, 2, 9, -3];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(12, -3, 17);
    graph.addEdge(-3, 9, 3);
    graph.addEdge(9, 2, 3);

    expect(removeVertix(Graph2().adjacencyList, 7)).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> WeightedDirected -> Images -> graph-3.png
test("remove the vertix 5 and all its relationships", () => {
    const vertices = [1, 10, 7];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(10, 1, 19);
    graph.addEdge(7, 10, -12);

    expect(removeVertix(Graph3().adjacencyList, 5)).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> WeightedDirected -> Images -> graph-4.png
test("remove the vertix 'K' and all its relationships", () => {
    expect(removeVertix(Graph4().adjacencyList, "K")).toEqual(Graph4().adjacencyList);
})