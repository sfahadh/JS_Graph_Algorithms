const removeVertix = require("./problem");
const UDG1 = require("../../Starter/UnweightedDirected/Structure/graph-1");
const WDG1 = require("../../Starter/WeightedDirected/Structure/graph-1");
const UUG1 = require("../../Starter/UnweightedUnirected/Structure/graph-1");
const WUG1 = require("../../Starter/WeightedUndirected/Structure/graph-1");

// Test Case 1:
test("remove the vetix 'B' and all its relationships", () => {
    const inputGraph = new Graph();
    const outputGraph = new Graph();
    expect(removeVertix(inputGraph.adjacencyList, "B")).toEqual(outputGraph.adjacencyList);
})
