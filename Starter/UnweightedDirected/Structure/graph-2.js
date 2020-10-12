const Graph = require("../../Graphs/UnweightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [1, 2, 3];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(1, 2);
    graph.addEdge(2, 3);

    return graph;
}

module.exports = constructGraph;