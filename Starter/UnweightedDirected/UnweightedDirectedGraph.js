function UnweightedDirectedGraph() {
    this.adjacencyList = {};
}

UnweightedDirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

UnweightedDirectedGraph.prototype.addEdge = function (vertix1, vertix2) {
    this.adjacencyList[vertix1].push(vertix2);
}

module.exports = UnweightedDirectedGraph;