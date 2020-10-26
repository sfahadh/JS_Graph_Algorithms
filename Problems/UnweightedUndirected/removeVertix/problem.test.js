const removeVertix = require("./problem");
const generateVertices = require("../../../Starter/generateVertices");
const Graph = require("../../../Starter/UnweightedUndirected/UnweightedUndirectedGraph");
const Graph1 = require("../../../Starter/UnweightedUndirected/Structure/graph-1");
const Graph2 = require("../../../Starter/UnweightedUndirected/Structure/graph-2");
const Graph3 = require("../../../Starter/UnweightedUndirected/Structure/graph-3");
const Graph4 = require("../../../Starter/UnweightedUndirected/Structure/graph-4");
const Graph5 = require("../../../Starter/UnweightedUndirected/Structure/graph-5");
const Graph6 = require("../../../Starter/UnweightedUndirected/Structure/graph-6");
const Graph7 = require("../../../Starter/UnweightedUndirected/Structure/graph-7");
const Graph8 = require("../../../Starter/UnweightedUndirected/Structure/graph-8");
const Graph9 = require("../../../Starter/UnweightedUndirected/Structure/graph-9");
const Graph10 = require("../../../Starter/UnweightedUndirected/Structure/graph-10");
const Graph11 = require("../../../Starter/UnweightedUndirected/Structure/graph-11");
const Graph12 = require("../../../Starter/UnweightedUndirected/Structure/graph-12");

// Test Case 1: //? refer to Starter -> UnweightedUndirected -> Images -> graph-1.png
test("remove the vertix 'F' and all its relationships", () => {
    const vertices = ["A", "B", "C", "D", "E"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");

    expect(removeVertix(Graph1().adjacencyList, "F")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedUndirected -> Images -> graph-2.png
test("remove the vertix 'Apple' and all its relationships", () => {
    const vertices = ["Netflix", "Google", "Amazon", "MS", "FB"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Netflix", "Amazon");
    graph.addEdge("Netflix", "FB");
    graph.addEdge("Google", "FB");
    graph.addEdge("Google", "MS");
    graph.addEdge("Amazon", "FB");
    graph.addEdge("MS", "FB");

    expect(removeVertix(Graph2().adjacencyList, "Apple")).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> UnweightedUndirected -> Images -> graph-3.png
test("remove the vertix 'Middle' and all its relationships", () => {
    const vertices = ["Up", "Left", "Right", "Down"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Up", "Left");
    graph.addEdge("Up", "Right");
    graph.addEdge("Down", "Left");
    graph.addEdge("Down", "Right");

    expect(removeVertix(Graph3().adjacencyList, "Middle")).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedUndirected -> Images -> graph-4.png
test("remove the vertix 3 and all its relationships", () => {
    const vertices = [1, 7, 0, 2, 9, 4, 8];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(1, 7);
    graph.addEdge(7, 0);
    graph.addEdge(0, 2);
    graph.addEdge(0, 9);
    graph.addEdge(2, 4);
    graph.addEdge(2, 9);
    graph.addEdge(9, 8);
    graph.addEdge(9, 4);
    graph.addEdge(8, 4);

    expect(removeVertix(Graph4().adjacencyList, 3)).toEqual(graph.adjacencyList);
})