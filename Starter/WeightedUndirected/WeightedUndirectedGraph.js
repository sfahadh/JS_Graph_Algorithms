function WeightedUndirectedGraph() {
    this.adjacencyList = {};
}

WeightedUndirectedGraph.prototype.addVertix = function (vertix) {
    this.adjacencyList[vertix] = [];
}

WeightedUndirectedGraph.prototype.addEdge = function (vertix1, vertix2, weight) {
    let containsVertix = false;

    for (let vertix of this.adjacencyList[vertix1]) {
        if (vertix.vertix === vertix2) {
            containsVertix = true;
            vertix.weight = weight;
        }
    }

    if (!containsVertix) {
        this.adjacencyList[vertix1].push({ vertix: vertix2, weight });
        this.adjacencyList[vertix2].push({ vertix: vertix1, weight });
    } else {
        for (let vertix of this.adjacencyList[vertix2]) {
            if (vertix.vertix === vertix1) {
                vertix.weight = weight;
            }
        }
    }
}

module.exports = WeightedUndirectedGraph;