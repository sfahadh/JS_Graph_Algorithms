const Graph = require("../UnweightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [1, 2, 7, 3, 5, 4, 6];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(1, 7);
    graph.addEdge(1, 3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(2, 5);
    graph.addEdge(7, 4);
    graph.addEdge(3, 7);
    graph.addEdge(3, 4);
    graph.addEdge(3, 6);
    graph.addEdge(5, 3);
    graph.addEdge(5, 6);
    graph.addEdge(6, 4);

    return graph;
}

module.exports = constructGraph;