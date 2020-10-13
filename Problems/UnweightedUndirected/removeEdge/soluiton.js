const removeEdge = (adjacencyList, vertix1, vertix2) => {
    adjacencyList[vertix1] = adjacencyList[vertix1].filter(v => v !== vertix2);
    adjacencyList[vertix2] = adjacencyList[vertix2].filter(v => v !== vertix1);
    return adjacencyList;
}