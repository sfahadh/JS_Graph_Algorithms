const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["I", "D", "T", "E", "A", "N", "R", "L", "M", "O"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("I", "D", 13);
    graph.addEdge("I", "T", 6);
    graph.addEdge("I", "E", 9);
    graph.addEdge("I", "A", 17);
    graph.addEdge("D", "N", 18);
    graph.addEdge("D", "T", 11);
    graph.addEdge("T", "R", 11);
    graph.addEdge("T", "E", 1);
    graph.addEdge("E", "L", 11);
    graph.addEdge("E", "A", 8);
    graph.addEdge("A", "M", 14);
    graph.addEdge("N", "R", 5);
    graph.addEdge("R", "L", 7);
    graph.addEdge("L", "M", 12);
    graph.addEdge("O", "N", 7);
    graph.addEdge("O", "R", 6);
    graph.addEdge("O", "L", 9);
    graph.addEdge("O", "M", 12);

    return graph;
}

module.exports = constructGraph;