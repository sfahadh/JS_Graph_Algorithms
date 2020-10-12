const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [7, 12, 2, 9, -3];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(7, 12, 5);
    graph.addEdge(12, -3, 17);
    graph.addEdge(-3, 9, 3);
    graph.addEdge(9, 2, 3);
    graph.addEdge(2, 7, 17);

    return graph;
}

module.exports = constructGraph;