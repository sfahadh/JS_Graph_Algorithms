const breadthFirstSearch = (adjacencyList, start) => {
    if (!start) return [];
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currVertix;

    while (queue.length) {
        currVertix = queue.shift();
        result.push(currVertix);

        adjacencyList[currVertix].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        })
    }

    return result;
}
