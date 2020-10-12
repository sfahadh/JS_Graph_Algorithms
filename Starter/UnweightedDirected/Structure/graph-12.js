const Graph = require("../UnweightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 6);
    graph.addEdge(6, 7);
    graph.addEdge(7, 8);
    graph.addEdge(8, 9);
    graph.addEdge(9, 10);
    graph.addEdge(10, 11);
    graph.addEdge(11, 12);
    graph.addEdge(12, 13);
    graph.addEdge(13, 14);
    graph.addEdge(14, 15);
    graph.addEdge(15, 16);
    graph.addEdge(16, 17);
    graph.addEdge(17, 18);
    graph.addEdge(18, 19);
    graph.addEdge(19, 20);
    graph.addEdge(20, 21);
    graph.addEdge(21, 22);
    graph.addEdge(22, 1);

    return graph;
}

module.exports = constructGraph;