const generateVertices = require("../../../Starter/generateVertices");
const removeEdge = require("./problem");
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
test("remove the edge between vertices 'Yang' and 'Yin'", () => {
    const vertices = ["Yin", "Yang"];
    const graph = new Graph();
    generateVertices(graph, vertices);
    expect(removeEdge(Graph1().adjacencyList, "Yang", "Yin")).toEqual(graph.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedDirected -> Images -> graph-2.png
test("remove the edge between vertices 1 and 2", () => {
    const vertices = [1, 2, 3];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(2, 3);

    expect(removeEdge(Graph2().adjacencyList, 1, 2)).toEqual(graph.adjacencyList);
})

// Test Case 3: //? refer to Starter -> UnweightedDirected -> Images -> graph-3.png
test("remove the edge between vertices -1 and -2", () => {
    expect(removeEdge(Graph3().adjacencyList, -1, -2)).toEqual(Graph3().adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedDirected -> Images -> graph-4.png
test("remove the edge between vertices 'D' and 'T'", () => {
    const vertices = ["S", "T", "D", "K"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("D", "S");
    graph.addEdge("D", "K");

    expect(removeEdge(Graph4().adjacencyList, 'D', 'T')).toEqual(graph.adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedDirected -> Images -> graph-4.png
test("remove the edge between vertices 'D' and 'T'", () => {
    const vertices = ["S", "T", "D", "K"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("D", "S");
    graph.addEdge("D", "K");

    expect(removeEdge(Graph4().adjacencyList, 'D', 'T')).toEqual(graph.adjacencyList);
})

// Test Case 5: //? refer to Starter -> UnweightedDirected -> Images -> graph-5.png
test("remove the edge between vertices 6 and -6", () => {
    const vertices = [6, -6, 8, 7, -7];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(8, - 6);
    graph.addEdge(8, 7);
    graph.addEdge(-7, 7);

    expect(removeEdge(Graph5().adjacencyList, 6, -6)).toEqual(graph.adjacencyList);
})

// Test Case 5: //? refer to Starter -> UnweightedDirected -> Images -> graph-5.png
test("remove the edge between vertices 6 and -6", () => {
    const vertices = [6, -6, 8, 7, -7];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(8, - 6);
    graph.addEdge(8, 7);
    graph.addEdge(-7, 7);

    expect(removeEdge(Graph5().adjacencyList, 6, -6)).toEqual(graph.adjacencyList);
})

// Test Case 6: //? refer to Starter -> UnweightedDirected -> Images -> graph-6.png
test("remove the edge between vertices 'S' and 'U'", () => {
    const vertices = ["S", "U", "R", "M", "P", "E"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("U", "S");
    graph.addEdge("R", "S");
    graph.addEdge("R", "E");
    graph.addEdge("M", "E");
    graph.addEdge("M", "R");
    graph.addEdge("M", "P");
    graph.addEdge("P", "U");
    graph.addEdge("P", "E");

    expect(removeEdge(Graph6().adjacencyList, "S", "U")).toEqual(graph.adjacencyList);
})

// Test Case 7: //? refer to Starter -> UnweightedDirected -> Images -> graph-7.png
test("remove the edge between vertices 1 and 2", () => {
    const vertices = [1, 2, 7, 3, 5, 4, 6];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(1, 7);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);
    graph.addEdge(2, 5);
    graph.addEdge(7, 4);
    graph.addEdge(3, 7);
    graph.addEdge(3, 4);
    graph.addEdge(3, 6);
    graph.addEdge(5, 3);
    graph.addEdge(5, 6);
    graph.addEdge(6, 4);

    expect(removeEdge(Graph7().adjacencyList, 1, 2)).toEqual(graph.adjacencyList);
})

// Test Case 8: //? refer to Starter -> UnweightedDirected -> Images -> graph-8.png
test("remove the edge between vertices 71 and 57", () => {
    const vertices = [52, 29, 57, 71, 24, 33, 68, 98, 21];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(52, 29);
    graph.addEdge(52, 57);
    graph.addEdge(52, 71);
    graph.addEdge(29, 24);
    graph.addEdge(29, 33);
    graph.addEdge(57, 71);
    graph.addEdge(57, 68);
    graph.addEdge(71, 68);
    graph.addEdge(71, 98);
    graph.addEdge(24, 21);

    expect(removeEdge(Graph8().adjacencyList, 71, 57)).toEqual(graph.adjacencyList);
})

// Test Case 9: //? refer to Starter -> UnweightedDirected -> Images -> graph-9.png
test("remove the edge between vertices 'Loki' and 'Loki'", () => {
    const vertices = ["Thanos", "Loki", "Thor", "Hulk"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Thanos", "Thor");
    graph.addEdge("Thanos", "Loki");
    graph.addEdge("Thanos", "Hulk");
    graph.addEdge("Thor", "Hulk");
    graph.addEdge("Thor", "Loki");
    graph.addEdge("Thor", "Thor");
    graph.addEdge("Hulk", "Loki");
    graph.addEdge("Loki", "Thor");
    graph.addEdge("Loki", "Hulk");

    expect(removeEdge(Graph9().adjacencyList, "Loki", "Loki")).toEqual(graph.adjacencyList);
})

// Test Case 10: //? refer to Starter -> UnweightedDirected -> Images -> graph-10.png
test("remove the edge between vertices 1 and 6", () => {
    const vertices = [5, -26, 12, -3, 21, 19, -9, 1, 7, -16, 6];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(5, 12);
    graph.addEdge(5, -3);
    graph.addEdge(5, 21);
    graph.addEdge(-26, -3);
    graph.addEdge(-26, 19);
    graph.addEdge(12, -9);
    graph.addEdge(12, 1);
    graph.addEdge(12, 7);
    graph.addEdge(-3, 1);
    graph.addEdge(21, 7);
    graph.addEdge(19, 6);
    graph.addEdge(1, -16);

    expect(removeEdge(Graph10().adjacencyList, 1, 6)).toEqual(graph.adjacencyList);
})

// Test Case 11: //? refer to Starter -> UnweightedDirected -> Images -> graph-11.png
test("remove the edge between vertices 1 and 4", () => {
    expect(removeEdge(Graph11().adjacencyList, 1, 4)).toEqual(Graph11().adjacencyList);
})

// Test Case 12: //? refer to Starter -> UnweightedDirected -> Images -> graph-12.png
test("remove the edge between vertices 22 and 1", () => {
    const vertices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 6);
    graph.addEdge(6, 7);
    graph.addEdge(7, 8);
    graph.addEdge(8, 9);
    graph.addEdge(9, 10);
    graph.addEdge(10, 11);
    graph.addEdge(11, 12);
    graph.addEdge(12, 13);
    graph.addEdge(13, 14);
    graph.addEdge(14, 15);
    graph.addEdge(15, 16);
    graph.addEdge(16, 17);
    graph.addEdge(17, 18);
    graph.addEdge(18, 19);
    graph.addEdge(19, 20);
    graph.addEdge(20, 21);
    graph.addEdge(21, 22);

    expect(removeEdge(Graph12().adjacencyList, 22, 1)).toEqual(graph.adjacencyList);
})