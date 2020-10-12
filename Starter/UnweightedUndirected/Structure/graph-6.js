const Graph = require("../UnweightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["D", "N", "O", "R", "A", "T", "K", "E", "I", "X"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("D", "N");
    graph.addEdge("D", "O");
    graph.addEdge("D", "R");
    graph.addEdge("R", "E");
    graph.addEdge("N", "A");
    graph.addEdge("N", "K");
    graph.addEdge("N", "T");
    graph.addEdge("K", "I");
    graph.addEdge("K", "X");

    return graph;
}

module.exports = constructGraph;