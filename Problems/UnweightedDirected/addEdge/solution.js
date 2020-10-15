const addEdge = (adjacencyList, vertix1, vertix2) => {
    if (!adjacencyList[vertix1].includes(vertix2)) adjacencyList[vertix1].push(vertix2);
    return adjacencyList;
}