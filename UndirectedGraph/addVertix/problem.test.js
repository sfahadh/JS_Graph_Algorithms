const Graph = require("../../Starter/Undirected/Graph");
const addVertix = require("./problem");

// Test Case 1:
test("add the vertex 'D' to the adjacency list", () => {
    const graph = new Graph();
    graph.addVertix("A");
    graph.addVertix("B");
    graph.addVertix("C");

    const result = new Graph();
    result.addVertix("A");
    result.addVertix("B");
    result.addVertix("C");
    result.addVertix("D");
    expect(addVertix(graph.adjacencyList, "D")).toEqual(result.adjacencyList);
})