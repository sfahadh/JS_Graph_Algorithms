const Graph = require("../UnweightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["A", "H", "B", "D", "G", "I", "M", "C", "F", "E", "K", "L"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("A", "B");
    graph.addEdge("A", "D");
    graph.addEdge("A", "G");
    graph.addEdge("A", "H");
    graph.addEdge("H", "I");
    graph.addEdge("B", "D");
    graph.addEdge("B", "C");
    graph.addEdge("B", "C");
    graph.addEdge("D", "C");
    graph.addEdge("D", "F");
    graph.addEdge("D", "G");
    graph.addEdge("G", "F");
    graph.addEdge("G", "I");
    graph.addEdge("I", "F");
    graph.addEdge("I", "K");
    graph.addEdge("I", "L");
    graph.addEdge("I", "M");
    graph.addEdge("M", "L");
    graph.addEdge("C", "F");
    graph.addEdge("C", "E");
    graph.addEdge("F", "K");
    graph.addEdge("E", "K");
    graph.addEdge("K", "L");

    return graph;
}

module.exports = constructGraph;