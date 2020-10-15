const addEdge = require("./problem");
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
test("established an edge between vertices 'Yin' and 'Yang'", () => {
    const result = Graph1();
    result.addEdge("Yin", "Yang");
    expect(addEdge(Graph1().adjacencyList, "Yin", "Yang")).toEqual(result.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedDirected -> Images -> graph-2.png
test("established an edge between vertices 3 and 1", () => {
    const result = Graph2();
    result.addEdge(3, 1);
    expect(addEdge(Graph2().adjacencyList, 3, 1)).toEqual(result.adjacencyList);
})

// Test Case 3: //? refer to Starter -> UnweightedDirected -> Images -> graph-3.png
test("established an edge between vertices -3 and -1", () => {
    const result = Graph3();
    result.addEdge(-3, -1);
    expect(addEdge(Graph3().adjacencyList, -3, -1)).toEqual(result.adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedDirected -> Images -> graph-4.png
test("established an edge between vertices 'S' and 'T'", () => {
    const result = Graph4();
    result.addEdge("S", "T");
    expect(addEdge(Graph4().adjacencyList, "S", "T")).toEqual(result.adjacencyList);
})