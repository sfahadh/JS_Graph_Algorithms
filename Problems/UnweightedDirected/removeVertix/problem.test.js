const removeVertix = require("./problem");
const generateVertices = require("../../../Starter/generateVertices");
const Graph = require("../../../Starter/UnweightedDirected/UnweightedDirectedGraph");
const Graph1 = require("../../../Starter/UnweightedDirected/Structure/graph-1");
const Graph2 = require("../../../Starter/UnweightedDirected/Structure/graph-2");
const Graph3 = require("../../../Starter/UnweightedDirected/Structure/graph-3");
const Graph4 = require("../../../Starter/UnweightedDirected/Structure/graph-4");
const Graph5 = require("../../../Starter/UnweightedDirected/Structure/graph-5");
const Graph6 = require("../../../Starter/UnweightedDirected/Structure/graph-6");
const Graph7 = require("../../../Starter/UnweightedDirected/Structure/graph-7");
const Graph8 = require("../../../Starter/UnweightedDirected/Structure/graph-8");
const Graph9 = require("../../../Starter/UnweightedDirected/Structure/graph-9");
const Graph10 = require("../../../Starter/UnweightedDirected/Structure/graph-10");
const Graph11 = require("../../../Starter/UnweightedDirected/Structure/graph-11");
const Graph12 = require("../../../Starter/UnweightedDirected/Structure/graph-12");

// Test Case 1: //? refer to Starter -> UnweightedDirected -> Images -> graph-1.png
test("remove the vertix 'Yang' and all its relationships", () => {
    const graph = new Graph();
    graph.addVertix("Yin");
    expect(removeVertix(Graph1().adjacencyList, "Yang")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedDirected -> Images -> graph-2.png
test("remove the vertix 2 and all its relationships", () => {
    const graph = new Graph();
    graph.addVertix(1);
    graph.addVertix(3);
    expect(removeVertix(Graph2().adjacencyList, 2)).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> UnweightedDirected -> Images -> graph-3.png
test("remove the vertix -2 and all its relationships", () => {
    const graph = new Graph();
    graph.addVertix(-1);
    graph.addVertix(-3);
    graph.addEdge(-1, -3);
    expect(removeVertix(Graph3().adjacencyList, -2)).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedDirected -> Images -> graph-4.png
test("remove the vertix 'T' and all its relationships", () => {
    const vertices = ["S", "D", "K"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("D", "S");
    graph.addEdge("D", "K");

    expect(removeVertix(Graph4().adjacencyList, 'T')).toEqual(graph.adjacencyList);
})
