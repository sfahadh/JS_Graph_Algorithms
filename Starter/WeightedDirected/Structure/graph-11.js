const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["A", "B", "C", "D", "E", "F", "G", "H"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("A", "B", 2);
    graph.addEdge("A", "F", 7);
    graph.addEdge("A", "E", 3);
    graph.addEdge("B", "F", 6);
    graph.addEdge("B", "C", 5);
    graph.addEdge("B", "G", 2);
    graph.addEdge("C", "D", 4);
    graph.addEdge("C", "F", 3);
    graph.addEdge("C", "G", 5);
    graph.addEdge("D", "G", 3);
    graph.addEdge("D", "H", 1);
    graph.addEdge("E", "F", 6);
    graph.addEdge("G", "F", 6);
    graph.addEdge("G", "H", 5);

    return graph;
}

module.exports = constructGraph;