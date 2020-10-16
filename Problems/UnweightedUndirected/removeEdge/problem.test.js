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

    expect(removeEdge(Graph4().adjacencyList, 2, 0)).toEqual(graph.adjacencyList);
})

// Test Case 5: //? refer to Starter -> UnweightedUndirected -> Images -> graph-5.png
test("remove the edge between vertices 4 and 3", () => {
    const vertices = [5, 3, 0, 9, 1, 7, 4, 2];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(9, 5);
    graph.addEdge(9, 4);
    graph.addEdge(4, 5);
    graph.addEdge(4, 2);
    graph.addEdge(2, 1);
    graph.addEdge(3, 0);
    graph.addEdge(3, 7);
    graph.addEdge(0, 7);

    expect(removeEdge(Graph5().adjacencyList, 4, 3)).toEqual(graph.adjacencyList);
})

// Test Case 6: //? refer to Starter -> UnweightedUndirected -> Images -> graph-6.png
test("remove the edge between vertices 'D' and 'N'", () => {
    const vertices = ["D", "N", "O", "R", "A", "T", "K", "E", "I", "X"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("D", "O");
    graph.addEdge("D", "R");
    graph.addEdge("R", "E");
    graph.addEdge("N", "A");
    graph.addEdge("N", "K");
    graph.addEdge("N", "T");
    graph.addEdge("K", "I");
    graph.addEdge("K", "X");

    expect(removeEdge(Graph6().adjacencyList, "D", "N")).toEqual(graph.adjacencyList);
})

// Test Case 7: //? refer to Starter -> UnweightedUndirected -> Images -> graph-7.png
test("remove the edge between vertices 'K' and 'L'", () => {
    const vertices = ["A", "H", "B", "D", "G", "I", "M", "C", "F", "E", "K", "L"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("A", "B");
    graph.addEdge("A", "D");
    graph.addEdge("A", "G");
    graph.addEdge("A", "H");
    graph.addEdge("H", "I");
    graph.addEdge("B", "D");
    graph.addEdge("B", "C");
    graph.addEdge("B", "C");
    graph.addEdge("D", "C");
    graph.addEdge("D", "F");
    graph.addEdge("D", "G");
    graph.addEdge("G", "F");
    graph.addEdge("G", "I");
    graph.addEdge("I", "F");
    graph.addEdge("I", "K");
    graph.addEdge("I", "L");
    graph.addEdge("I", "M");
    graph.addEdge("M", "L");
    graph.addEdge("C", "F");
    graph.addEdge("C", "E");
    graph.addEdge("F", "K");
    graph.addEdge("E", "K");

    expect(removeEdge(Graph7().adjacencyList, "K", "L")).toEqual(graph.adjacencyList);
})

// Test Case 8: //? refer to Starter -> UnweightedUndirected -> Images -> graph-8.png
test("remove the edge between vertices 'Yin' and 'Yang'", () => {
    const vertices = ["Yin", "Yang"];
    const graph = new Graph();
    generateVertices(graph, vertices);
    expect(removeEdge(Graph8().adjacencyList, "Yin", "Yang")).toEqual(graph.adjacencyList);
})

