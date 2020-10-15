const addEdge = (adjacencyList, vertix1, vertix2) => {
    if (!adjacencyList[vertix1].includes(vertix2)) adjacencyList[vertix1].push(vertix2);
    if (!adjacencyList[vertix2].includes(vertix1)) adjacencyList[vertix2].push(vertix1);
    return adjacencyList;
}