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

// Test Case 5: //? refer to Starter -> UnweightedDirected -> Images -> graph-5.png
test("remove the vertix 8 and all its relationships", () => {
    const vertices = [6, -6, 7, -7];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(6, -6);
    graph.addEdge(-7, 7);

    expect(removeVertix(Graph5().adjacencyList, 8)).toEqual(graph.adjacencyList);
})

// Test Case 6: //? refer to Starter -> UnweightedDirected -> Images -> graph-6.png
test("remove the vertix 'S' and all its relationships", () => {
    const vertices = ["U", "R", "M", "P", "E"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("R", "E");
    graph.addEdge("M", "E");
    graph.addEdge("M", "R");
    graph.addEdge("M", "P");
    graph.addEdge("P", "U");
    graph.addEdge("P", "E");

    expect(removeVertix(Graph6().adjacencyList, 'S')).toEqual(graph.adjacencyList);
})

// Test Case 7: //? refer to Starter -> UnweightedDirected -> Images -> graph-7.png
test("remove the vertix 4 and all its relationships", () => {
    const vertices = [1, 2, 7, 3, 5, 6];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(1, 7);
    graph.addEdge(1, 3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(2, 5);
    graph.addEdge(3, 7);
    graph.addEdge(3, 6);
    graph.addEdge(5, 3);
    graph.addEdge(5, 6);

    expect(removeVertix(Graph7().adjacencyList, 4)).toEqual(graph.adjacencyList);
})

// Test Case 8: //? refer to Starter -> UnweightedDirected -> Images -> graph-8.png
test("remove the vertix 21 and all its relationships", () => {
    const vertices = [52, 29, 57, 71, 24, 33, 68, 98];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(52, 29);
    graph.addEdge(52, 57);
    graph.addEdge(52, 71);
    graph.addEdge(29, 24);
    graph.addEdge(29, 33);
    graph.addEdge(57, 71);
    graph.addEdge(57, 68);
    graph.addEdge(71, 57);
    graph.addEdge(71, 68);
    graph.addEdge(71, 98);

    expect(removeVertix(Graph8().adjacencyList, 21)).toEqual(graph.adjacencyList);
})
