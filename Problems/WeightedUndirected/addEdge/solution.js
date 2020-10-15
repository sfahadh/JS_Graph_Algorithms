const addEdge = (adjacencyList, vertix1, vertix2, weight) => {
    let containsVertix = false;

    for (let vertix of adjacencyList[vertix1]) {
        if (vertix.vertix === vertix2) {
            containsVertix = true;
            vertix.weight = weight;
        }
    }

    if (!containsVertix) {
        adjacencyList[vertix1].push({ vertix: vertix2, weight });
        adjacencyList[vertix2].push({ vertix: vertix1, weight });
    } else {
        for (let vertix of adjacencyList[vertix2]) {
            if (vertix.vertix === vertix1) {
                vertix.weight = weight;
            }
        }
    }

    return adjacencyList;
}