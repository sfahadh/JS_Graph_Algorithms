const addVertix = require("./problem");
const UDG1 = require("../../../Starter/UnweightedDirected/Structure/graph-1")

// Test Case 1:
test("add the vertex 'H' to the adjacency list for Unweighted Undirected graph", () => {
    const result = UDG1();
    result.addVertix("H")
    expect(addVertix(UDG1().adjacencyList, "H")).toEqual(result.adjacencyList);
})