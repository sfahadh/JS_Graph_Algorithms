const addVertix = require("./problem");
const UUG1 = require("../../../Starter/UnweightedUndirected/Structure/graph-1");
const UUG5 = require("../../../Starter/UnweightedUndirected/Structure/graph-5");
const UDG2 = require("../../../Starter/UnweightedDirected/Structure/graph-2");
const UDG6 = require("../../../Starter/UnweightedDirected/Structure/graph-7");
const WDG3 = require("../../../Starter/WeightedDirected/Structure/graph-3");
const WDG7 = require("../../../Starter/WeightedDirected/Structure/graph-7");
const WUG4 = require("../../../Starter/WeightedUndirected/Structure/graph-4");
const WUG8 = require("../../../Starter/WeightedUndirected/Structure/graph-8");

// Test Case 1:
test("add the vertex H to the adjacency list for Unweighted Undirected graph", () => {
    const result = UUG1();
    result.addVertix("H");
    expect(addVertix(UUG1().adjacencyList, "H")).toEqual(result.adjacencyList);
})

// Test Case 2:
test("add the vertex 4 to the adjacency list for Unweighted Directed graph", () => {
    const result = UDG2();
    result.addVertix(4);
    expect(addVertix(UDG2().adjacencyList, 4)).toEqual(result.adjacencyList);
})

// Test Case 3:
test("add the vertex 12 to the adjacency list for Weighted Directed graph", () => {
    const result = WDG3();
    result.addVertix(12);
    expect(addVertix(WDG3().adjacencyList, 12)).toEqual(result.adjacencyList);
})

// Test Case 4:
test("add the vertex 1 to the adjacency list for Weighted Undirected graph", () => {
    const result = WUG4();
    result.addVertix(1);
    expect(addVertix(WUG4().adjacencyList, 1)).toEqual(result.adjacencyList);
})

// Test Case 5:
test("add the vertex -3 to the adjacency list for Unweighted Undirected graph", () => {
    const result = UUG5();
    result.addVertix(-3);
    expect(addVertix(UUG5().adjacencyList, -3)).toEqual(result.adjacencyList);
})

// Test Case 6:
test("add the vertex 'G' to the adjacency list for Unweighted Directed graph", () => {
    const result = UDG6();
    result.addVertix('G');
    expect(addVertix(UDG6().adjacencyList, 'G')).toEqual(result.adjacencyList);
})

// Test Case 7:
test("add the vertex 7 to the adjacency list for Weighted Directed graph", () => {
    const result = WDG7();
    result.addVertix(7);
    expect(addVertix(WDG7().adjacencyList, 7)).toEqual(result.adjacencyList);
})

// Test Case 8:
test("add the vertex 8 to the adjacency list for Weighted Directed graph", () => {
    const result = WUG8();
    result.addVertix(8);
    expect(addVertix(WUG8().adjacencyList, 8)).toEqual(result.adjacencyList);
})