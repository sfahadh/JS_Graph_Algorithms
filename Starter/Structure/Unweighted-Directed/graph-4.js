const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["S", "T", "D", "K"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("D", "S");
    graph.addEdge("D", "T");
    graph.addEdge("D", "K");

    return graph;
}

module.exports = constructGraph;