const Graph = require("../UnweightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["S", "U", "R", "M", "P", "E"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("S", "U");
    graph.addEdge("U", "S");
    graph.addEdge("R", "S");
    graph.addEdge("R", "E");
    graph.addEdge("M", "E");
    graph.addEdge("M", "R");
    graph.addEdge("M", "P");
    graph.addEdge("P", "U");
    graph.addEdge("P", "E");

    return graph;
}

module.exports = constructGraph;