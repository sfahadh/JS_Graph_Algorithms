const addEdge = (adjacencyList, vertix1, vertix2, weight) => {
    let containsVertix = false;

    for (let vertix of adjacencyList[vertix1]) {
        if (vertix.vertix === vertix2) containsVertix = true;
        vertix.weight = weight;
    }

    if (!containsVertix) adjacencyList[vertix1].push({ vertix: vertix2, weight });
    return adjacencyList;
}