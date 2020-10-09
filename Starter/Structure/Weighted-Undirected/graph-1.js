const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Hades", "Zeus", "Ares"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Hades", "Zeus", 99);
    graph.addEdge("Hades", "Aries", 91);
    graph.addEdge("Zeus", "Aries", 96);

    return graph;
}

module.exports = constructGraph;