const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [13, 17, 7, 20, 12, 19, 3];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(13, 20, 7);
    graph.addEdge(13, 7, 10);
    graph.addEdge(17, 7, 12);
    graph.addEdge(17, 12, 7);
    graph.addEdge(7, 20, 12);
    graph.addEdge(7, 12, 13);
    graph.addEdge(20, 12, 16);
    graph.addEdge(20, 19, 10);
    graph.addEdge(12, 19, 9);
    graph.addEdge(12, 3, 11);
    graph.addEdge(19, 3, 13);

    return graph;
}

module.exports = constructGraph;