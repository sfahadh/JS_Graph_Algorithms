const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["3", "10", "-3", "-7", "6", "7", "15", "-12", "0", "12"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("3", "-7");
    graph.addEdge("10", "-3");
    graph.addEdge("10", "6");
    graph.addEdge("-3", "6");
    graph.addEdge("-7", "6");
    graph.addEdge("6", "-12");
    graph.addEdge("6", "12");
    graph.addEdge("6", "15");
    graph.addEdge("6", "7");
    graph.addEdge("7", "0");
    graph.addEdge("7", "15");
    graph.addEdge("-12", "0");
    graph.addEdge("0", "12");
    graph.addEdge("12", "15");

    return graph;
}

module.exports = constructGraph;