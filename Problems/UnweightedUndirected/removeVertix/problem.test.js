const removeVertix = require("./problem");
const generateVertices = require("../../../Starter/generateVertices");
const Graph = require("../../../Starter/UnweightedUndirected/UnweightedUndirectedGraph");
const Graph1 = require("../../../Starter/UnweightedUndirected/Structure/graph-1");
const Graph2 = require("../../../Starter/UnweightedUndirected/Structure/graph-2");
const Graph3 = require("../../../Starter/UnweightedUndirected/Structure/graph-3");
const Graph4 = require("../../../Starter/UnweightedUndirected/Structure/graph-4");
const Graph5 = require("../../../Starter/UnweightedUndirected/Structure/graph-5");
const Graph6 = require("../../../Starter/UnweightedUndirected/Structure/graph-6");
const Graph7 = require("../../../Starter/UnweightedUndirected/Structure/graph-7");
const Graph8 = require("../../../Starter/UnweightedUndirected/Structure/graph-8");
const Graph9 = require("../../../Starter/UnweightedUndirected/Structure/graph-9");
const Graph10 = require("../../../Starter/UnweightedUndirected/Structure/graph-10");
const Graph11 = require("../../../Starter/UnweightedUndirected/Structure/graph-11");
const Graph12 = require("../../../Starter/UnweightedUndirected/Structure/graph-12");

// Test Case 1: //? refer to Starter -> UnweightedUndirected -> Images -> graph-1.png
test("remove the vertix '' and all its relationships", () => {
    const graph = new Graph();
    expect(removeVertix(Graph1().adjacencyList, "")).toEqual(graph.adjacencyList);
})