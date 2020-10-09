const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [0, 1, 2, 3, 4, 5, 6];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(0, 1, 3);
    graph.addEdge(0, 2, 4);
    graph.addEdge(0, 3, 6);
    graph.addEdge(1, 0, 4);
    graph.addEdge(1, 4, 7);
    graph.addEdge(4, 6, 8);
    graph.addEdge(3, 4, 9);
    graph.addEdge(3, 5, 10);
    graph.addEdge(2, 0, 3);
    graph.addEdge(2, 5, 11);
    graph.addEdge(5, 6, 5);

    return graph;
}

module.exports = constructGraph;