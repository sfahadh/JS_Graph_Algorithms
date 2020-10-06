const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["1", "3", "7", "0", "2", "9", "4", "8"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("1", "3");
    graph.addEdge("1", "7");
    graph.addEdge("7", "0");
    graph.addEdge("0", "2");
    graph.addEdge("0", "9");
    graph.addEdge("2", "4");
    graph.addEdge("2", "9");
    graph.addEdge("9", "8");
    graph.addEdge("9", "4");
    graph.addEdge("8", "4");

    return graph;
}

module.exports = constructGraph;