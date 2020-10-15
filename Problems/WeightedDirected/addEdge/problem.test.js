const addEdge = require("./problem");
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
test("established an edge between vertices 'Yang' and 'Yin' with weight of 96", () => {
    const result = Graph1();
    result.addEdge("Yin", "Yang", 96);
    expect(addEdge(Graph1().adjacencyList, "Yin", "Yang", 96)).toEqual(result.adjacencyList);
})

// Test Case 2: //? refer to Starter -> WeightedDirected -> Images -> graph-2.png
test("established an edge between vertices 7 and 9 with weight of 12", () => {
    const result = Graph2();
    result.addEdge(7, 9, 12);
    expect(addEdge(Graph2().adjacencyList, 7, 9, 12)).toEqual(result.adjacencyList);
})

// Test Case 3: //? refer to Starter -> WeightedDirected -> Images -> graph-3.png
test("established an edge between vertices 1 and 7 with weight of 9", () => {
    const result = Graph3();
    result.addEdge(1, 7, 9);
    expect(addEdge(Graph3().adjacencyList, 1, 7, 9)).toEqual(result.adjacencyList);
})

// Test Case 4: //? refer to Starter -> WeightedDirected -> Images -> graph-4.png
test("established an edge between vertices 'A' and 'H' with weight of 6", () => {
    const result = Graph4();
    result.addEdge("A", "H", 6);
    expect(addEdge(Graph4().adjacencyList, "A", "H", 6)).toEqual(result.adjacencyList);
})

// Test Case 5: //? refer to Starter -> WeightedDirected -> Images -> graph-5.png
test("established an edge between vertices 2 and 3 with weight of 15", () => {
    const result = Graph5();
    result.addEdge(2, 3, 15);
    expect(addEdge(Graph5().adjacencyList, 2, 3, 15)).toEqual(result.adjacencyList);
})

// Test Case 6: //? refer to Starter -> WeightedDirected -> Images -> graph-6.png
test("established an edge between vertices 31 and 33 with weight of 5", () => {
    const result = Graph6();
    result.addEdge(31, 33, 5);
    expect(addEdge(Graph6().adjacencyList, 31, 33, 5)).toEqual(result.adjacencyList);
})

// Test Case 7: //? refer to Starter -> WeightedDirected -> Images -> graph-7.png
test("established an edge between vertices 1 and 2 with weight of 3", () => {
    const result = Graph7();
    result.addEdge(1, 2, 3);
    expect(addEdge(Graph7().adjacencyList, 1, 2, 3)).toEqual(result.adjacencyList);
})

// Test Case 8: //? refer to Starter -> WeightedDirected -> Images -> graph-8.png
test("established an edge between vertices 'J' and 'H' with weight of 7", () => {
    const result = Graph8();
    result.addEdge("J", "H", 7);
    expect(addEdge(Graph8().adjacencyList, "J", "H", 7)).toEqual(result.adjacencyList);
})

// Test Case 9: //? refer to Starter -> WeightedDirected -> Images -> graph-9.png
test("established an edge between vertices 'Purple' and 'Green' with weight of 9", () => {
    const result = Graph9();
    result.addEdge("Purple", "Green", 9);
    expect(addEdge(Graph9().adjacencyList, "Purple", "Green", 9)).toEqual(result.adjacencyList);
})

// Test Case 10: //? refer to Starter -> WeightedDirected -> Images -> graph-10.png
test("established an edge between vertices 'Super' and 'Super' with weight of -6", () => {
    const result = Graph10();
    result.addEdge("Super", "Super", -6);
    expect(addEdge(Graph10().adjacencyList, "Super", "Super", -6)).toEqual(result.adjacencyList);
})

// Test Case 11: //? refer to Starter -> WeightedDirected -> Images -> graph-11.png
test("established an edge between vertices 'E' and 'B' with weight of 5", () => {
    const result = Graph11();
    result.addEdge("E", "B", 5);
    expect(addEdge(Graph11().adjacencyList, "E", "B", 5)).toEqual(result.adjacencyList);
})

// Test Case 12: //? refer to Starter -> WeightedDirected -> Images -> graph-12.png
test("established an edge between vertices 9 and 4 with weight of 17", () => {
    const result = Graph12();
    result.addEdge(9, 4, 17);
    expect(addEdge(Graph12().adjacencyList, 9, 4, 17)).toEqual(result.adjacencyList);
})