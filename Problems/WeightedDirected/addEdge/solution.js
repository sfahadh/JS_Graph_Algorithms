const addEdge = (adjacencyList, vertix1, vertix2, weight) => {
    adjacencyList[vertix1].push({ vertix: vertix2, weight });
    return adjacencyList;
}