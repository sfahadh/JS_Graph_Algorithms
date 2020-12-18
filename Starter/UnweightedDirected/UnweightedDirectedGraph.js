function UnweightedDirectedGraph() {
    this.adjacencyList = {};
    this.adjacencyMatrix = [];
}

UnweightedDirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];

    if (this.adjacencyMatrix.length === 0) {
        this.adjacencyMatrix.push([0]);
    } else {
        this.adjacencyMatrix.push([...this.adjacencyMatrix[0]]);
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            this.adjacencyMatrix[i].push(0);
        }
    }
}

UnweightedDirectedGraph.prototype.addEdge = function (vertix1, vertix2) {
    if (!this.adjacencyList[vertix1].includes(vertix2)) this.adjacencyList[vertix1].push(vertix2);
}



module.exports = UnweightedDirectedGraph;