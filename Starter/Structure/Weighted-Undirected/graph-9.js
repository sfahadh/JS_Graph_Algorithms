const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [1, 5, 12, 0, 3, 9, 21, 18, 4, 16, 25, 2, 19, 8, 27, 22, 7, 23, 31, 12, 17];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(1, 5, 7);
    graph.addEdge(1, 2, 11);
    graph.addEdge(5, 18, 3);
    graph.addEdge(5, 12, 2);
    graph.addEdge(12, 8, 12);
    graph.addEdge(12, 0, 4);
    graph.addEdge(12, 4, 8);
    graph.addEdge(0, 16, 13);
    graph.addEdge(0, 3, 12);
    graph.addEdge(3, 16, 1);
    graph.addEdge(3, 9, 5);
    graph.addEdge(9, 25, 6);
    graph.addEdge(9, 21, 2);
    graph.addEdge(21, 17, 15);
    graph.addEdge(18, 8, 10);
    graph.addEdge(4, 8, 1);
    graph.addEdge(4, 16, 8);
    graph.addEdge(16, 25, 3);
    graph.addEdge(2, 22, 5);
    graph.addEdge(19, 8, 7);
    graph.addEdge(27, 8, 4);
    graph.addEdge(22, 19, 5);
    graph.addEdge(22, 8, 8);
    graph.addEdge(7, 8, 17);
    graph.addEdge(23, 8, 19);
    graph.addEdge(31, 27, 7);
    graph.addEdge(12, 31, 11);
    graph.addEdge(17, 12, 6);

    return graph;
}

module.exports = constructGraph;