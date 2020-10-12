const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["NY", "TX", "FL"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("NY", "TX");
    graph.addEdge("NY", "FL");
    graph.addEdge("TX", "FL");

    return graph;
}

module.exports = constructGraph;