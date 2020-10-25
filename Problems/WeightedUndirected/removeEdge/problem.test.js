const generateVertices = require("../../../Starter/generateVertices");
const removeEdge = require("./problem");
const Graph = require("../../../Starter/WeightedUndirected/WeightedUndirectedGraph");
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
test("remove the edge between vertices 'Hades' and 'Ares'", () => {
    const graph = new Graph();
    const vertices = ["Hades", "Zeus", "Ares"];

    generateVertices(graph, vertices);
    graph.addEdge("Hades", "Zeus", 99);
    graph.addEdge("Zeus", "Ares", 96);

    expect(removeEdge(Graph1().adjacencyList, "Hades", "Ares")).toEqual(graph.adjacencyList);
})
