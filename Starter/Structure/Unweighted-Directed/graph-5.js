const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = [6, -6, 8, 7, -7];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge(6, -6);
    graph.addEdge(8, - 6);
    graph.addEdge(8, 7);
    graph.addEdge(-7, 7);

    return graph;
}

module.exports = constructGraph;