const removeEdge = (adjacencyList, vertix1, vertix2) => {
    adjacencyList[vertix1] = adjacencyList[vertix1].filter(v => v.vertix !== vertix2);
    return adjacencyList;
}