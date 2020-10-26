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

// Test Case 5: //? refer to Starter -> WeightedDirected -> Images -> graph-5.png
test("remove the vertix 10 and all its relationships", () => {
    const graph = new Graph();
    generateVertices(graph, [15, 2, 6, 3, 16, 9]);
    expect(removeVertix(Graph5().adjacencyList, 10)).toEqual(graph.adjacencyList);
})

// Test Case 6: //? refer to Starter -> WeightedDirected -> Images -> graph-6.png
test("remove the vertix 49 and all its relationships", () => {
    const vertices = [18, 52, 31, 13, 1, 5, 33];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(18, 52, 19);
    graph.addEdge(52, 13, 23);
    graph.addEdge(52, 1, 8);
    graph.addEdge(31, 18, 3);
    graph.addEdge(31, 52, 16);
    graph.addEdge(31, 13, 2);
    graph.addEdge(13, 1, 51);
    graph.addEdge(13, 33, 8);
    graph.addEdge(5, 31, 22);
    graph.addEdge(5, 13, 4);
    graph.addEdge(5, 33, 1);
    graph.addEdge(33, 1, 10);

    expect(removeVertix(Graph6().adjacencyList, 49)).toEqual(graph.adjacencyList);
})

// Test Case 7: //? refer to Starter -> WeightedDirected -> Images -> graph-7.png
test("remove the vertix 0 and all its relationships", () => {
    const vertices = [1, 2, 3, 4, 5, 6];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(1, 4, 7);
    graph.addEdge(4, 6, 8);
    graph.addEdge(3, 4, 9);
    graph.addEdge(3, 5, 10);
    graph.addEdge(2, 5, 11);
    graph.addEdge(5, 6, 5);

    expect(removeVertix(Graph7().adjacencyList, 0)).toEqual(graph.adjacencyList);
})

// Test Case 8: //? refer to Starter -> WeightedDirected -> Images -> graph-8.png
test("remove the vertix 'H' and all its relationships", () => {
    const vertices = ["A", "B", "C", "D", "E", "F", "G", "I", "J"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("A", "J", 23);
    graph.addEdge("A", "I", 7);
    graph.addEdge("B", "A", 12);
    graph.addEdge("B", "I", 4);
    graph.addEdge("B", "C", 3);
    graph.addEdge("C", "G", -1);
    graph.addEdge("C", "D", 17);
    graph.addEdge("D", "E", -3);
    graph.addEdge("I", "A", 10);
    graph.addEdge("I", "G", 9);
    graph.addEdge("G", "B", 6);
    graph.addEdge("G", "F", 16);
    graph.addEdge("F", "C", -7);
    graph.addEdge("F", "E", 8);

    expect(removeVertix(Graph8().adjacencyList, "H")).toEqual(graph.adjacencyList);
})