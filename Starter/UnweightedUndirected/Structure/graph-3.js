const Graph = require("../../Undirected/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Up", "Left", "Middle", "Right", "Down"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Up", "Left");
    graph.addEdge("Up", "Right");
    graph.addEdge("Up", "Middle");
    graph.addEdge("Down", "Left");
    graph.addEdge("Down", "Right");
    graph.addEdge("Down", "Middle");
    graph.addEdge("Middle", "Left");
    graph.addEdge("Middle", "Right");

    return graph;
}

module.exports = constructGraph;