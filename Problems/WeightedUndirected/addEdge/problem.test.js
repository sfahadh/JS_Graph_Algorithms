const addEdge = require("./problem");
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
test("established an edge between vertices 'Hades' and 'Zeus' with weight of 91", () => {
    const result = Graph1();
    result.addEdge("Hades", "Zeus", 5);
    expect(addEdge(Graph1().adjacencyList, "Hades", "Zeus", 5)).toEqual(result.adjacencyList);
})

// Test Case 2: //? refer to Starter -> WeightedUndirected -> Images -> graph-2.png
test("established an edge between vertices 'Up' and 'Left' with weight of 17", () => {
    const result = Graph2();
    result.addEdge("Up", "Left", 17);
    expect(addEdge(Graph2().adjacencyList, "Up", "Left", 17)).toEqual(result.adjacencyList);
})

// Test Case 3: //? refer to Starter -> WeightedUndirected -> Images -> graph-3.png
test("established an edge between vertices 'H' and 'O' with weight of 28", () => {
    const result = Graph3();
    result.addEdge("H", "O", 28);
    expect(addEdge(Graph3().adjacencyList, "H", "O", 28)).toEqual(result.adjacencyList);
})

// Test Case 4: //? refer to Starter -> WeightedUndirected -> Images -> graph-4.png
test("established an edge between vertices 12 and 1 with weight of 1", () => {
    const result = Graph4();
    result.addEdge(12, 8, 1);
    expect(addEdge(Graph4().adjacencyList, 12, 8, 1)).toEqual(result.adjacencyList);
})

// Test Case 5: //? refer to Starter -> WeightedUndirected -> Images -> graph-5.png
test("established an edge between vertices -9 and 6 with weight of -69", () => {
    const result = Graph5();
    result.addEdge(-9, 6, -69);
    expect(addEdge(Graph5().adjacencyList, -9, 6, -69)).toEqual(result.adjacencyList);
})

// Test Case 6: //? refer to Starter -> WeightedUndirected -> Images -> graph-6.png
test("established an edge between vertices 91 and 19 with weight of 50", () => {
    const result = Graph6();
    result.addEdge(91, 19, 50);
    expect(addEdge(Graph6().adjacencyList, 91, 19, 50)).toEqual(result.adjacencyList);
})

// Test Case 7: //? refer to Starter -> WeightedUndirected -> Images -> graph-7.png
test("established an edge between vertices 17 and 26 with weight of 12", () => {
    const result = Graph7();
    result.addEdge(17, 26, 12);
    expect(addEdge(Graph7().adjacencyList, 17, 26, 12)).toEqual(result.adjacencyList);
})

// Test Case 8: //? refer to Starter -> WeightedUndirected -> Images -> graph-8.png
test("established an edge between vertices 22 and 43 with weight of 100", () => {
    const result = Graph8();
    result.addEdge(22, 43, 100);
    expect(addEdge(Graph8().adjacencyList, 22, 43, 100)).toEqual(result.adjacencyList);
})

// Test Case 9: //? refer to Starter -> WeightedUndirected -> Images -> graph-9.png
test("established an edge between vertices 1 and 18 with weight of 1", () => {
    const result = Graph9();
    result.addEdge(1, 18, 1);
    expect(addEdge(Graph9().adjacencyList, 1, 18, 1)).toEqual(result.adjacencyList);
})

// Test Case 10: //? refer to Starter -> WeightedUndirected -> Images -> graph-10.png
test("established an edge between vertices 'A' and 'D' with weight of 4", () => {
    const result = Graph10();
    result.addEdge("A", "D", 4);
    expect(addEdge(Graph10().adjacencyList, "A", "D", 4)).toEqual(result.adjacencyList);
})

// Test Case 11: //? refer to Starter -> WeightedUndirected -> Images -> graph-11.png
test("established an edge between vertices 13 and 17 with weight of 51", () => {
    const result = Graph11();
    result.addEdge(13, 17, 51);
    expect(addEdge(Graph11().adjacencyList, 13, 17, 51)).toEqual(result.adjacencyList);
})

// Test Case 12: //? refer to Starter -> WeightedUndirected -> Images -> graph-12.png
test("established an edge between vertices 'T' and 'N' with weight of 22", () => {
    const result = Graph12();
    result.addEdge("T", "N", 22);
    expect(addEdge(Graph12().adjacencyList, "T", "N", 22)).toEqual(result.adjacencyList);
})