const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [47, 26, 91, 99, 19, 74, 62];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(47, 26, 38);
    graph.addEdge(47, 99, 44);
    graph.addEdge(26, 91, 32);
    graph.addEdge(99, 74, 45);
    graph.addEdge(74, 62, 41);
    graph.addEdge(62, 19, 36);

    return graph;
}

module.exports = constructGraph;