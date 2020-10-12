const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Thanos", "Loki", "Thor", "Hulk"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Thanos", "Thor");
    graph.addEdge("Thanos", "Loki");
    graph.addEdge("Thanos", "Hulk");
    graph.addEdge("Thor", "Hulk");
    graph.addEdge("Thor", "Loki");
    graph.addEdge("Thor", "Thor");
    graph.addEdge("Hulk", "Loki");
    graph.addEdge("Loki", "Loki");
    graph.addEdge("Loki", "Thor");
    graph.addEdge("Loki", "Hulk");

    return graph;
}

module.exports = constructGraph;