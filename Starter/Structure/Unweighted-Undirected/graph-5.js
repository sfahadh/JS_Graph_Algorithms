const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [9, 5, 4, 2, 1, 3, 7, 0];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(9, 5);
    graph.addEdge(9, 4);
    graph.addEdge(4, 5);
    graph.addEdge(4, 3);
    graph.addEdge(4, 2);
    graph.addEdge(2, 1);
    graph.addEdge(3, 0);
    graph.addEdge(3, 7);
    graph.addEdge(0, 7);

    return graph;
}

module.exports = constructGraph;