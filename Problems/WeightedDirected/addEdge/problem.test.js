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
    result.addEdge("Yang", "Yin", 96);
    expect(addEdge(Graph1().adjacencyList, "Yang", "Yin", 96)).toEqual(result.adjacencyList);
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