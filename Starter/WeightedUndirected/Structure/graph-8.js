const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [22, 43, 25, 31, 29, 16];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(22, 31, 5);
    graph.addEdge(22, 29, 9);
    graph.addEdge(22, 25, 3);
    graph.addEdge(43, 29, 2);
    graph.addEdge(43, 16, 6);
    graph.addEdge(25, 16, 7);
    graph.addEdge(31, 16, 9);

    return graph;
}

module.exports = constructGraph;