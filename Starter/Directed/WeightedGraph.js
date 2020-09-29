function WeightedGraph() {
    this.adjacencyList = {};
}

WeightedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

WeightedGraph.prototype.addEdge = function (vertix1, vertix2, weight) {
    this.adjacencyList[vertix1].push({ vertix: vertix2, weight });
}

module.exports = WeightedGraph;