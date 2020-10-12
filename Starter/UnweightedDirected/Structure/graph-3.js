const Graph = require("../../Graphs/UnweightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [-1, -2, -3];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(-1, -3);
    graph.addEdge(-2, -1);
    graph.addEdge(-3, -2);

    return graph;
}

module.exports = constructGraph;