const Graph = require("../UnweightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [5, -26, 12, -3, 21, 19, -9, 1, 7, -16, 6];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(5, 12);
    graph.addEdge(5, -3);
    graph.addEdge(5, 21);
    graph.addEdge(-26, -3);
    graph.addEdge(-26, 19);
    graph.addEdge(12, -9);
    graph.addEdge(12, 1);
    graph.addEdge(12, 7);
    graph.addEdge(-3, 1);
    graph.addEdge(21, 7);
    graph.addEdge(19, 6);
    graph.addEdge(1, -16);
    graph.addEdge(1, 6);

    return graph;
}

module.exports = constructGraph;