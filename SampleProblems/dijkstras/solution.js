const dijkstras = (adjacencyList, start, end) => {
    const priorityQueue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let vertix in adjacencyList) {
        if (vertix === start) {
            distances[vertix] = 0;
            priorityQueue.enqueue(vertix, 0);
        } else {
            distances[vertix] = Infinity;
            priorityQueue.enqueue(vertix, Infinity);
        }
        previous[vertix] = null;
    }

    while (priorityQueue.values.length) {
        smallest = priorityQueue.dequeue().data;
        if (smallest === end) {
            while (previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }

        if (smallest || distances[smallest] !== Infinity) {
            for (let neighbor in adjacencyList[smallest]) {
                let nextNode = adjacencyList[smallest][neighbor];
                let candidate = distances[smallest] + nextNode.weight;
                if (candidate < distances[nextNode.vertix]) {
                    distances[nextNode.vertix] = candidate;
                    previous[nextNode.vertix] = smallest;
                    NodeList.enqueue(nextNode, candidate);
                }
            }
        }
    }

    return path.concat(smallest).reverse();
}