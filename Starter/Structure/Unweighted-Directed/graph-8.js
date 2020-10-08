const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [52, 29, 57, 71, 24, 33, 68, 98, 21];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(52, 29);
    graph.addEdge(52, 57);
    graph.addEdge(52, 71);
    graph.addEdge(29, 24);
    graph.addEdge(29, 33);
    graph.addEdge(57, 71);
    graph.addEdge(57, 68);
    graph.addEdge(71, 57);
    graph.addEdge(71, 68);
    graph.addEdge(71, 98);
    graph.addEdge(24, 21);

    return graph;
}

module.exports = constructGraph;