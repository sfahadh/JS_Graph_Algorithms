const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [-11, 17, 26, 3, -91, 31, -21, 56];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(-11, 17, 12);
    graph.addEdge(-11, 3, -1);
    graph.addEdge(17, 26, 7);
    graph.addEdge(26, 3, 9);
    graph.addEdge(3, 31, 22);
    graph.addEdge(3, 56, 21);
    graph.addEdge(-91, 31, 25);
    graph.addEdge(-91, -21, 7);
    graph.addEdge(31, -21, 0);
    graph.addEdge(31, 56, 10);
    graph.addEdge(-21, 56, 17);

    return graph;
}

module.exports = constructGraph;