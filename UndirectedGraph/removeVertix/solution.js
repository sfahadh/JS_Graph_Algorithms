const removeVertix = (adjacencyList, vertix) => {
    for (let item in adjacencyList) {
        adjacencyList[item] = adjacencyList[item].filter(v => {
            return v !== vertix;
        })
    }
    delete adjacencyList[vertix];
    return adjacencyList;
}