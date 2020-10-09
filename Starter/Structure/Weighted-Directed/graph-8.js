const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("A", "J", 23);
    graph.addEdge("A", "I", 7);
    graph.addEdge("B", "A", 12);
    graph.addEdge("B", "I", 4);
    graph.addEdge("B", "C", 3);
    graph.addEdge("C", "G", -1);
    graph.addEdge("C", "D", 17);
    graph.addEdge("D", "E", -3);
    graph.addEdge("I", "A", 10);
    graph.addEdge("I", "G", 9);
    graph.addEdge("G", "B", 6);
    graph.addEdge("G", "H", 19);
    graph.addEdge("G", "F", 16);
    graph.addEdge("F", "C", -7);
    graph.addEdge("F", "E", 8);

    return graph;
}

module.exports = constructGraph;