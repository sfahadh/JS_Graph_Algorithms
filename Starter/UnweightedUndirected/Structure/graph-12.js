const Graph = require("../UnweightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [-2, -1, 0, -3, -4, -5];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(-5, 0);
    graph.addEdge(-5, -1);
    graph.addEdge(-5, -2);
    graph.addEdge(-5, -3);
    graph.addEdge(-5, -4);
    graph.addEdge(-4, 0);
    graph.addEdge(-4, -1);
    graph.addEdge(-4, -2);
    graph.addEdge(-4, -3);
    graph.addEdge(-3, 0);
    graph.addEdge(-3, -1);
    graph.addEdge(-3, -2);
    graph.addEdge(-2, 0);
    graph.addEdge(-2, -1);
    graph.addEdge(-1, 0);

    return graph;
}

module.exports = constructGraph;