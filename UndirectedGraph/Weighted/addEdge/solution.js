const addEdge = (adjacencyList, vertix1, vertix2, weight) => {
    adjacencyList[vertix1].push({ "vertix": vertix2, weight });
    adjacencyList[vertix2].push({ "vertix": vertix1, weight });
    return adjacencyList;
}