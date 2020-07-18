function UnweightedGraph() {
    this.adjacencyList = {};
}

UnweightedGraph.prototype.addVertix = function(vertix) {
    this.adjacencyList[vertix] = [];
}

UnweightedGraph.prototype.addEdge = function(vertix1, vertix2) {
    this.adjacencyList[vertix1] = vertix2;
}

module.exports = UnweightedGraph;