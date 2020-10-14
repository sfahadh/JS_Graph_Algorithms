const addEdge = require("./problem");
const Graph1 = require("../../../Starter/WeightedUndirected/Structure/graph-1");

// Test Case 1:
test("established an edge between vertices 'Hades' and 'Zeus'", () => {
    const result = Graph1();
    result.addEdge("Hades", "Zeus", 91);
    expect(addEdge(Graph1().adjacencyList, "Hades", "Zeus", 91)).toEqual(result.adjacencyList);
})