const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["A", "B", "C", "D", "E"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("A", "B", 11);
    graph.addEdge("A", "E", 13);
    graph.addEdge("B", "C", 7);
    graph.addEdge("B", "E", 8);
    graph.addEdge("C", "D", 10);
    graph.addEdge("D", "E", 9);

    return graph;
}

module.exports = constructGraph;