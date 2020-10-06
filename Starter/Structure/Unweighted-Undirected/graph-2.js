const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Apple", "Netflix", "Google", "Amazon", "MS", "FB"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Apple", "Netflix");
    graph.addEdge("Apple", "Google");
    graph.addEdge("Netflix", "Amazon");
    graph.addEdge("Netflix", "FB");
    graph.addEdge("Google", "FB");
    graph.addEdge("Google", "MS");
    graph.addEdge("Amazon", "FB");
    graph.addEdge("MS", "FB");

    return graph;
}

module.exports = constructGraph;