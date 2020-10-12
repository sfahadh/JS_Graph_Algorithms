const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Yin", "Yang"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);
    graph.addEdge("Yin", "Yang", 69);
    return graph;
}

module.exports = constructGraph;