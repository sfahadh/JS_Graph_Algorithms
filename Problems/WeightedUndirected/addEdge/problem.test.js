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
    result.addEdge("Hades", "Zeus", 91);
    expect(addEdge(Graph1().adjacencyList, "Hades", "Zeus", 91)).toEqual(result.adjacencyList);
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