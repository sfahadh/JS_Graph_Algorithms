function Graph() {
    this.adjacencyList = {};
}

Graph.prototype.addVertix = function(vertix) {
    this.adjacencyList[vertix] = [];
}

module.exports = Graph;