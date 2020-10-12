const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Drax", "Hulk", "Loki", "Thanos"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Drax", "Hulk");
    graph.addEdge("Drax", "Loki");
    graph.addEdge("Hulk", "Loki");

    return graph;
}

module.exports = constructGraph;