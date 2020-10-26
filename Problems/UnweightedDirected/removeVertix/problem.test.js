const removeVertix = require("./problem");
const generateVertices = require("../../../Starter/generateVertices");
const Graph = require("../../../Starter/UnweightedDirected/UnweightedDirectedGraph");
const graph1 = require("../../../Starter/UnweightedDirected/Structure/graph-1");

// Test Case 1: //? refer to Starter -> UnweightedDirected -> Images -> graph-1.png
test("remove the vertix 'Yang' and all its relationships", () => {
    const result = new Graph();
    result.addVertix("Yin")
    expect(removeVertix(graph1().adjacencyList, "Yang")).toEqual(result.adjacencyList);
})
