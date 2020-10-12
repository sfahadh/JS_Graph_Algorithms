const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["T", "H", "E", "B", "O", "X"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("T", "H", 12);
    graph.addEdge("T", "E", 18);
    graph.addEdge("T", "B", 10);
    graph.addEdge("T", "O", 11);
    graph.addEdge("T", "X", 16);
    graph.addEdge("B", "E", 9);
    graph.addEdge("B", "O", 15);
    graph.addEdge("B", "X", 14);
    graph.addEdge("B", "H", 23);
    graph.addEdge("H", "E", 12);
    graph.addEdge("X", "O", 7);

    return graph;
}

module.exports = constructGraph;