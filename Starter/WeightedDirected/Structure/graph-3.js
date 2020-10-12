const Graph = require("../WeightedDirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [1, 10, 7, 5];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(1, 5, -5);
    graph.addEdge(10, 1, 19);
    graph.addEdge(10, 5, 8);
    graph.addEdge(5, 7, 13);
    graph.addEdge(7, 10, -12);

    return graph;
}

module.exports = constructGraph;