const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["H", "E", "A", "R", "T"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("H", "E", 21);
    graph.addEdge("H", "A", 1);
    graph.addEdge("H", "T", 13);
    graph.addEdge("E", "T", -11);
    graph.addEdge("E", "R", -12);
    graph.addEdge("A", "E", 16);
    graph.addEdge("A", "T", -10);
    graph.addEdge("R", "A", 41);
    graph.addEdge("R", "H", 10);
    graph.addEdge("T", "R", 9);

    return graph;
}

module.exports = constructGraph;