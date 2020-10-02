const generateVertices = (graph, arr) => {
    for (let index of arr) {
        graph.adjacencyList[index] = [];
    }
    return graph;
}

module.exports = generateVertices;