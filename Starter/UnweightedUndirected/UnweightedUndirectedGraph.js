function UnweightedUndirectedGraph() {
    this.adjacencyList = {};
}

UnweightedUndirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

UnweightedUndirectedGraph.prototype.addEdge = function (vertix1, vertix2) {
    if (!this.adjacencyList[vertix1].includes(vertix2)) this.adjacencyList[vertix1].push(vertix2);
    if (!this.adjacencyList[vertix2].includes(vertix1)) this.adjacencyList[vertix2].push(vertix1);
}

module.exports = UnweightedUndirectedGraph;