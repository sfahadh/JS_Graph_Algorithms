const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [12, -5, 9, -6, 4, -10, -1, 15, 6, 8];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(-5, 12, 8);
    graph.addEdge(9, -5, 11);
    graph.addEdge(-6, 12, 17);
    graph.addEdge(4, 12, 13);
    graph.addEdge(4, -6, 9);
    graph.addEdge(4, -5, 19);
    graph.addEdge(4, 9, 19);
    graph.addEdge(4, -1, 12);
    graph.addEdge(-10, -6, 5);
    graph.addEdge(-10, 4, 6);
    graph.addEdge(-10, -1, 8);
    graph.addEdge(-1, 9, 15);
    graph.addEdge(-1, 15, 9);
    graph.addEdge(15, 9, 11);
    graph.addEdge(15, -1, 6);
    graph.addEdge(6, -10, 10);
    graph.addEdge(6, -1, 9);
    graph.addEdge(6, 8, 13);
    graph.addEdge(8, -1, 16);
    graph.addEdge(8, 15, 10);

    return graph;
}

module.exports = constructGraph;