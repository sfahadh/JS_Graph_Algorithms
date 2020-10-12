const Graph = require("../../Directed/UnweightedGraph");
const generateVertices = require("../../generateVertices");

const vertices = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"];

const constructGraph = () => {
    const graph = new Graph;
    generateVertices(graph, vertices);

    graph.addEdge("Red", "Purple", 15);
    graph.addEdge("Red", "Green", 13);
    graph.addEdge("Green", "Yellow", 10);
    graph.addEdge("Green", "Blue", 7);
    graph.addEdge("Purple", "Orange", 5);
    graph.addEdge("Purple", "Yellow", 11);
    graph.addEdge("Yellow", "Orange", -5);
    graph.addEdge("Yellow", "Blue", -4);

    return graph;
}

module.exports = constructGraph;