const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [12, 6, 0, 8, -3];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(12, 6, 3);
    graph.addEdge(12, 0, 5);
    graph.addEdge(6, 0, 1);
    graph.addEdge(6, -3, 2);
    graph.addEdge(-3, 0, 3);
    graph.addEdge(-3, 8, 4);
    graph.addEdge(8, 0, 2);

    return graph;
}

module.exports = constructGraph;