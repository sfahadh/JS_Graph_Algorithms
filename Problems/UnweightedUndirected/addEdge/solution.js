const addEdge = (adjacencyList, vertix1, vertix2) => {
    adjacencyList[vertix1].push(vertix2);
    adjacencyList[vertix2].push(vertix1);
    return adjacencyList;
}