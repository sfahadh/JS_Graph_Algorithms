function WeightedUndirectedGraph() {
    this.adjacencyList = {};
}

WeightedUndirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

WeightedUndirectedGraph.prototype.addEdge = function (vertix1, vertix2, weight) {
    this.adjacencyList[vertix1].push({ vertix: vertix2, weight });
    this.adjacencyList[vertix2].push({ vertix: vertix1, weight });
}

module.exports = WeightedUndirectedGraph;