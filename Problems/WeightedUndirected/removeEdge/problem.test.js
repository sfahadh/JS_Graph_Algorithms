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

// Test Case 5: //? refer to Starter -> WeightedUndirected -> Images -> graph-5.png
test("remove the edge between vertices 6 and 1", () => {
    const graph = new Graph();
    const vertices = [3, 6, 8, -9, -5, 4, 15, 1];

    generateVertices(graph, vertices);
    graph.addEdge(3, 6, 8);
    graph.addEdge(3, -9, -13);
    graph.addEdge(3, 15, -5);
    graph.addEdge(3, 8, 20);
    graph.addEdge(6, 4, 8);
    graph.addEdge(8, 15, 20);
    graph.addEdge(-9, 15, 18);
    graph.addEdge(-5, 1, -3);
    graph.addEdge(-5, 4, 10);
    graph.addEdge(4, 1, 12);
    graph.addEdge(15, 1, 4);

    expect(removeEdge(Graph5().adjacencyList, 6, 1)).toEqual(graph.adjacencyList);
})

// Test Case 6: //? refer to Starter -> WeightedUndirected -> Images -> graph-6.png
test("remove the edge between vertices 26 and 91", () => {
    const graph = new Graph();
    const vertices = [47, 26, 91, 99, 19, 74, 62];

    generateVertices(graph, vertices);
    graph.addEdge(47, 26, 38);
    graph.addEdge(47, 99, 44);
    graph.addEdge(99, 74, 45);
    graph.addEdge(74, 62, 41);
    graph.addEdge(62, 19, 36);

    expect(removeEdge(Graph6().adjacencyList, 26, 91)).toEqual(graph.adjacencyList);
})

// Test Case 7: //? refer to Starter -> WeightedUndirected -> Images -> graph-7.png
test("remove the edge between vertices 3 and 31", () => {
    const graph = new Graph();
    const vertices = [-11, 17, 26, 3, -91, 31, -21, 56];

    generateVertices(graph, vertices);
    graph.addEdge(-11, 17, 12);
    graph.addEdge(-11, 3, -1);
    graph.addEdge(17, 26, 7);
    graph.addEdge(26, 3, 9);
    graph.addEdge(3, 56, 21);
    graph.addEdge(-91, 31, 25);
    graph.addEdge(-91, -21, 7);
    graph.addEdge(31, -21, 0);
    graph.addEdge(31, 56, 10);
    graph.addEdge(-21, 56, 17);

    expect(removeEdge(Graph7().adjacencyList, 3, 31)).toEqual(graph.adjacencyList);
})

// Test Case 8: //? refer to Starter -> WeightedUndirected -> Images -> graph-8.png
test("remove the edge between vertices 31 and 16", () => {
    const graph = new Graph();
    const vertices = [22, 43, 25, 31, 29, 16];

    generateVertices(graph, vertices);
    graph.addEdge(22, 31, 5);
    graph.addEdge(22, 29, 9);
    graph.addEdge(22, 25, 3);
    graph.addEdge(43, 29, 2);
    graph.addEdge(43, 16, 6);
    graph.addEdge(25, 16, 7);

    expect(removeEdge(Graph8().adjacencyList, 31, 16)).toEqual(graph.adjacencyList);
})

// Test Case 9: //? refer to Starter -> WeightedUndirected -> Images -> graph-9.png
test("remove the edge between vertices 21 and 17", () => {
    const graph = new Graph();
    const vertices = [1, 5, 12, 0, 3, 9, 21, 18, 4, 16, 25, 2, 19, 8, 27, 22, 7, 23, 31, 12, 17];

    generateVertices(graph, vertices);
    graph.addEdge(1, 5, 7);
    graph.addEdge(1, 2, 11);
    graph.addEdge(5, 18, 3);
    graph.addEdge(5, 12, 2);
    graph.addEdge(12, 8, 12);
    graph.addEdge(12, 0, 4);
    graph.addEdge(12, 4, 8);
    graph.addEdge(0, 16, 13);
    graph.addEdge(0, 3, 12);
    graph.addEdge(3, 16, 1);
    graph.addEdge(3, 9, 5);
    graph.addEdge(9, 25, 6);
    graph.addEdge(9, 21, 2);
    graph.addEdge(18, 8, 10);
    graph.addEdge(4, 8, 1);
    graph.addEdge(4, 16, 8);
    graph.addEdge(16, 25, 3);
    graph.addEdge(2, 22, 5);
    graph.addEdge(19, 8, 7);
    graph.addEdge(27, 8, 4);
    graph.addEdge(22, 19, 5);
    graph.addEdge(22, 8, 8);
    graph.addEdge(7, 8, 17);
    graph.addEdge(23, 8, 19);
    graph.addEdge(31, 27, 7);
    graph.addEdge(12, 31, 11);
    graph.addEdge(17, 12, 6);

    expect(removeEdge(Graph9().adjacencyList, 21, 17)).toEqual(graph.adjacencyList);
})

// Test Case 10: //? refer to Starter -> WeightedUndirected -> Images -> graph-10.png
test("remove the edge between vertices 'E' and 'B'", () => {
    const graph = new Graph();
    const vertices = ["A", "B", "C", "D", "E"];

    generateVertices(graph, vertices);
    graph.addEdge("A", "B", 11);
    graph.addEdge("A", "E", 13);
    graph.addEdge("B", "C", 7);
    graph.addEdge("C", "D", 10);
    graph.addEdge("D", "E", 9);

    expect(removeEdge(Graph10().adjacencyList, "E", "B")).toEqual(graph.adjacencyList);
})

// Test Case 11: //? refer to Starter -> WeightedUndirected -> Images -> graph-11.png
test("remove the edge between vertices 20 and 12", () => {
    const graph = new Graph();
    const vertices = [13, 17, 7, 20, 12, 19, 3];

    generateVertices(graph, vertices);
    graph.addEdge(13, 20, 7);
    graph.addEdge(13, 7, 10);
    graph.addEdge(17, 7, 12);
    graph.addEdge(17, 12, 7);
    graph.addEdge(7, 20, 12);
    graph.addEdge(7, 12, 13);
    graph.addEdge(20, 19, 10);
    graph.addEdge(12, 19, 9);
    graph.addEdge(12, 3, 11);
    graph.addEdge(19, 3, 13);

    expect(removeEdge(Graph11().adjacencyList, 20, 12)).toEqual(graph.adjacencyList);
})

// Test Case 12: //? refer to Starter -> WeightedUndirected -> Images -> graph-12.png
test("remove the edge between vertices 'I' and 'O'", () => {
    expect(removeEdge(Graph12().adjacencyList, "I", "O")).toEqual(Graph12().adjacencyList);
})
