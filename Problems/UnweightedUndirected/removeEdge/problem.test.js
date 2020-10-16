const generateVertices = require("../../../Starter/generateVertices");
const removeEdge = require("./problem");
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
test("remove the edge between vertices 'D' and 'E'", () => {
    const vertices = ["A", "B", "C", "D", "E", "F"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("F", "E");
    graph.addEdge("F", "D");

    expect(removeEdge(Graph1().adjacencyList, "D", "E")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedUndirected -> Images -> graph-2.png
test("remove the edge between vertices 'FB' and 'MS'", () => {
    const vertices = ["Apple", "Netflix", "Google", "Amazon", "MS", "FB"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Apple", "Netflix");
    graph.addEdge("Apple", "Google");
    graph.addEdge("Netflix", "Amazon");
    graph.addEdge("Netflix", "FB");
    graph.addEdge("Google", "FB");
    graph.addEdge("Amazon", "FB");
    graph.addEdge("Google", "MS");

    expect(removeEdge(Graph2().adjacencyList, "FB", "MS")).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> UnweightedUndirected -> Images -> graph-3.png
test("remove the edge between vertices 'Middle' and 'Up'", () => {
    const vertices = ["Up", "Down", "Middle", "Left", "Right"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Up", "Left");
    graph.addEdge("Up", "Right");
    graph.addEdge("Down", "Left");
    graph.addEdge("Down", "Right");
    graph.addEdge("Down", "Middle");
    graph.addEdge("Middle", "Left");
    graph.addEdge("Middle", "Right");

    console.log(graph.adjacencyList);

    expect(removeEdge(Graph3().adjacencyList, "Up", "Middle")).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedUndirected -> Images -> graph-4.png
test("remove the edge between vertices 2 and 0", () => {
    const vertices = [1, 7, 2, 4, 3, 0, 9, 8];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(1, 3);
    graph.addEdge(1, 7);
    graph.addEdge(7, 0);
    graph.addEdge(0, 9);
    graph.addEdge(2, 4);
    graph.addEdge(2, 9);
    graph.addEdge(9, 8);
    graph.addEdge(9, 4);
    graph.addEdge(8, 4);

    console.log(graph.adjacencyList);

    expect(removeEdge(Graph4().adjacencyList, 2, 0)).toEqual(graph.adjacencyList);
})

