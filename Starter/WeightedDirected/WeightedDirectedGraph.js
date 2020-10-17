function WeightedDirectedGraph() {
    this.adjacencyList = {};
}

WeightedDirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

WeightedDirectedGraph.prototype.addEdge = function (vertix1, vertix2, weight) {
    let containsVertix = false;

    for (let vertix of this.adjacencyList[vertix1]) {
        if (vertix.vertix === vertix2) {
            containsVertix = true;
            vertix.weight = weight;
        }
    }

    if (!containsVertix) {
        this.adjacencyList[vertix1].push({ vertix: vertix2, weight });
    }
}

module.exports = WeightedDirectedGraph;