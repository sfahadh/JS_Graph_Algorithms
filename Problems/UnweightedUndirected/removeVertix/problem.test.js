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

// Test Case 5: //? refer to Starter -> UnweightedUndirected -> Images -> graph-5.png
test("remove the vertix 2 and all its relationships", () => {
    const vertices = [9, 5, 4, 1, 3, 7, 0];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(9, 5);
    graph.addEdge(9, 4);
    graph.addEdge(4, 5);
    graph.addEdge(4, 3);
    graph.addEdge(3, 0);
    graph.addEdge(3, 7);
    graph.addEdge(0, 7);

    expect(removeVertix(Graph5().adjacencyList, 2)).toEqual(graph.adjacencyList);
})

// Test Case 6: //? refer to Starter -> UnweightedUndirected -> Images -> graph-6.png
test("remove the vertix 'D' and all its relationships", () => {
    const vertices = ["N", "O", "R", "A", "T", "K", "E", "I", "X"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("R", "E");
    graph.addEdge("N", "A");
    graph.addEdge("N", "K");
    graph.addEdge("N", "T");
    graph.addEdge("K", "I");
    graph.addEdge("K", "X");

    expect(removeVertix(Graph6().adjacencyList, "D")).toEqual(graph.adjacencyList);
})

// Test Case 7: //? refer to Starter -> UnweightedUndirected -> Images -> graph-7.png
test("remove the vertix 'E' and all its relationships", () => {
    const vertices = ["A", "H", "B", "D", "G", "I", "M", "C", "F", "K", "L"];
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
    graph.addEdge("F", "K");
    graph.addEdge("K", "L");

    expect(removeVertix(Graph7().adjacencyList, "E")).toEqual(graph.adjacencyList);
})

// Test Case 8: //? refer to Starter -> UnweightedUndirected -> Images -> graph-8.png
test("remove the vertix 'Yo' and all its relationships", () => {
    expect(removeVertix(Graph8().adjacencyList, "Yo")).toEqual(Graph8().adjacencyList);
})

// Test Case 9: //? refer to Starter -> UnweightedUndirected -> Images -> graph-9.png
test("remove the vertix 'NY' and all its relationships", () => {
    const vertices = ["TX", "FL"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("TX", "FL");

    expect(removeVertix(Graph9().adjacencyList, "NY")).toEqual(graph.adjacencyList);
})

// Test Case 10: //? refer to Starter -> UnweightedUndirected -> Images -> graph-10.png
test("remove the vertix 'Thanos' and all its relationships", () => {
    const vertices = ["Drax", "Hulk", "Loki"];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge("Drax", "Hulk");
    graph.addEdge("Drax", "Loki");
    graph.addEdge("Hulk", "Loki");

    expect(removeVertix(Graph10().adjacencyList, "Thanos")).toEqual(graph.adjacencyList);
})

// Test Case 11: //? refer to Starter -> UnweightedUndirected -> Images -> graph-11.png
test("remove the vertix 6 and all its relationships", () => {
    const vertices = [3, 10, -3, -7, 7, 15, -12, 0, 12];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(3, -7);
    graph.addEdge(10, -3);
    graph.addEdge(7, 0);
    graph.addEdge(7, 15);
    graph.addEdge(-12, 0);
    graph.addEdge(0, 12);
    graph.addEdge(12, 15);

    expect(removeVertix(Graph11().adjacencyList, 6)).toEqual(graph.adjacencyList);
})

// Test Case 12: //? refer to Starter -> UnweightedUndirected -> Images -> graph-12.png
test("remove the vertix 0 and all its relationships", () => {
    const vertices = [-2, -1, -3, -4, -5];
    const graph = new Graph();

    generateVertices(graph, vertices);
    graph.addEdge(-5, -1);
    graph.addEdge(-5, -2);
    graph.addEdge(-5, -3);
    graph.addEdge(-5, -4);
    graph.addEdge(-4, -1);
    graph.addEdge(-4, -2);
    graph.addEdge(-4, -3);
    graph.addEdge(-3, -1);
    graph.addEdge(-3, -2);
    graph.addEdge(-2, -1);

    expect(removeVertix(Graph12().adjacencyList, 0)).toEqual(graph.adjacencyList);
})
