function UnweightedUndirectedGraph() {
    this.adjacencyList = {};
}

UnweightedUndirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

UnweightedUndirectedGraph.prototype.addEdge = function (vertix1, vertix2) {
    this.adjacencyList[vertix1].push(vertix2);
    this.adjacencyList[vertix2].push(vertix1);
}

module.exports = UnweightedUndirectedGraph;