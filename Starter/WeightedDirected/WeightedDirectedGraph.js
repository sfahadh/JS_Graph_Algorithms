function WeightedDirectedGraph() {
    this.adjacencyList = {};
}

WeightedDirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

WeightedDirectedGraph.prototype.addEdge = function (vertix1, vertix2, weight) {
    this.adjacencyList[vertix1].push({ vertix: vertix2, weight });
}

module.exports = WeightedDirectedGraph;