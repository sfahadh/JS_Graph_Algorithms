const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [1, 4, 7, 2, 5, 3, 6, 8];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(1, 2);
    graph.addEdge(4, 2);
    graph.addEdge(4, 5);
    graph.addEdge(7, 5);
    graph.addEdge(7, 8);
    graph.addEdge(2, 3);
    graph.addEdge(2, 6);
    graph.addEdge(2, 8);
    graph.addEdge(5, 6);

    return graph;
}

module.exports = constructGraph;