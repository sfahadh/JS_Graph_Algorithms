const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [3, 6, 8, -9, -5, 4, 15, 1];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(3, 6, 8);
    graph.addEdge(3, -9, -13);
    graph.addEdge(3, 15, -5);
    graph.addEdge(3, 8, 20);
    graph.addEdge(6, 1, 7);
    graph.addEdge(6, 4, 8);
    graph.addEdge(8, 15, 20);
    graph.addEdge(-9, 15, 18);
    graph.addEdge(-5, 1, -3);
    graph.addEdge(-5, 4, 10);
    graph.addEdge(4, 1, 12);
    graph.addEdge(15, 1, 4);

    return graph;
}

module.exports = constructGraph;