const addVertix = require("./problem");
const UUG1 = require("../../../Starter/UnweightedUndirected/Structure/graph-1");
const UDG2 = require("../../../Starter/UnweightedDirected/Structure/graph-2");
const WDG3 = require("../../../Starter/WeightedDirected/Structure/graph-3");
const WUG4 = require("../../../Starter/WeightedUndirected/Structure/graph-4");

// Test Case 1:
test("add the vertex 'H' to the adjacency list for Unweighted Undirected graph", () => {
    const result = UUG1();
    result.addVertix("H")
    expect(addVertix(UUG1().adjacencyList, "H")).toEqual(result.adjacencyList);
})

// Test Case 2:
test("add the vertex '4' to the adjacency list for Unweighted Directed graph", () => {
    const result = UDG2();
    result.addVertix("4")
    expect(addVertix(UDG2().adjacencyList, "4")).toEqual(result.adjacencyList);
})

// Test Case 3:
test("add the vertex '12' to the adjacency list for Weighted Directed graph", () => {
    const result = WDG3();
    result.addVertix("12")
    expect(addVertix(WDG3().adjacencyList, "12")).toEqual(result.adjacencyList);
})

// Test Case 3:
test("add the vertex '1' to the adjacency list for Weighted Undirected graph", () => {
    const result = WUG4();
    result.addVertix("1")
    expect(addVertix(WUG4().adjacencyList, "1")).toEqual(result.adjacencyList);
})