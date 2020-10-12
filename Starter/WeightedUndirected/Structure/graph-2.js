const Graph = require("../WeightedUndirectedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Up", "Down", "Left", "Right"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Up", "Down", 16);
    graph.addEdge("Left", "Right", 21);

    return graph;
}

module.exports = constructGraph;