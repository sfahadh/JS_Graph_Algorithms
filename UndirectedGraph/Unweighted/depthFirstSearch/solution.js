const depthFirstSearch = (adjacencyList, start) => {
    const result = [];
    const visited = {};

    (function recurse(vertix){
        if (!vertix) return null;
        result.push(vertix);
        visited[vertix] = true;
        for (let item of adjacencyList[vertix]) {
            if (!visited[item]) {
                return recurse(item);
            }
        }
    })(start)
    
    return result;
}