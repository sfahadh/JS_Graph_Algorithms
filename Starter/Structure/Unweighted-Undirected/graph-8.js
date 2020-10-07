const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Yin", "Yang"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);
    graph.addEdge("Yin", "Yang");
    return graph;
}

module.exports = constructGraph;