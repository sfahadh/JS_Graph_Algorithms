const Graph = require("../UnweightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Yin", "Yang"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);
    graph.addEdge("Yang", "Yin");
    return graph;
}

module.exports = constructGraph;