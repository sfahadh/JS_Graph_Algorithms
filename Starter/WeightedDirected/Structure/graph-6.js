const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [18, 52, 49, 31, 13, 1, 5, 33];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(18, 52, 19);
    graph.addEdge(52, 13, 23);
    graph.addEdge(52, 1, 8);
    graph.addEdge(49, 18, 18);
    graph.addEdge(49, 31, 7);
    graph.addEdge(49, 5, 31);
    graph.addEdge(31, 18, 3);
    graph.addEdge(31, 52, 16);
    graph.addEdge(31, 13, 2);
    graph.addEdge(13, 1, 51);
    graph.addEdge(13, 33, 8);
    graph.addEdge(5, 31, 22);
    graph.addEdge(5, 13, 4);
    graph.addEdge(5, 33, 1);
    graph.addEdge(33, 1, 10);

    return graph;
}

module.exports = constructGraph;