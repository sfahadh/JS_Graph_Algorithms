const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Super", "Smash", "Bros"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Super", "Smash", 15);
    graph.addEdge("Super", "Bros", 13);
    graph.addEdge("Smash", "Smash", -5);
    graph.addEdge("Smash", "Bros", 8);
    graph.addEdge("Bros", "Bros", -4);

    return graph;
}

module.exports = constructGraph;