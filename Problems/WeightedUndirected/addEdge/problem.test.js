const addEdge = require("./problem");

// Test Case 1:
test("established an edge between vertices 'B' and 'C'", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    expect(addEdge(inputGraph.adjacencyList, "B", "C", 10)).toEqual(outputGraph.adjacencyList);
})