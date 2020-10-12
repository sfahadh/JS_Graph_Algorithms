const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [15, 2, 6, 3, 16, 9, 10];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(15, 10, -7);
    graph.addEdge(2, 10, 11);
    graph.addEdge(6, 10, -9);
    graph.addEdge(3, 10, 18);
    graph.addEdge(16, 10, -1);
    graph.addEdge(9, 10, 22);

    return graph;
}

module.exports = constructGraph;