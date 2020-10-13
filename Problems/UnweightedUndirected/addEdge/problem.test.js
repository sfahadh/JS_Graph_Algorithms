const addEdge = require("./problem");
const Graph1 = require("../../../Starter/UnweightedUndirected/Structure/graph-1");
const Graph2 = require("../../../Starter/UnweightedUndirected/Structure/graph-2");
const Graph3 = require("../../../Starter/UnweightedUndirected/Structure/graph-3");
const Graph4 = require("../../../Starter/UnweightedUndirected/Structure/graph-4");
const Graph5 = require("../../../Starter/UnweightedUndirected/Structure/graph-5");
const Graph6 = require("../../../Starter/UnweightedUndirected/Structure/graph-6");
const Graph7 = require("../../../Starter/UnweightedUndirected/Structure/graph-7");
const Graph8 = require("../../../Starter/UnweightedUndirected/Structure/graph-8");

// Test Case 1: //? refer to Starter -> UnweightedUndirected -> Images -> graph-1.png
test("established an edge between vertices 'B' and 'C'", () => {
    const result = Graph1();
    result.addEdge("B", "C");
    expect(addEdge(Graph1().adjacencyList, "B", "C")).toEqual(result.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedUndirected -> Images -> graph-2.png
test("established an edge between vertices 'Apple' and 'FB'", () => {
    const result = Graph2();
    result.addEdge("Apple", "FB");
    expect(addEdge(Graph2().adjacencyList, "Apple", "FB")).toEqual(result.adjacencyList);
})

// Test Case 3: //? refer to Starter -> UnweightedUndirected -> Images -> graph-3.png
test("established an edge between vertices 'Up' and 'Down'", () => {
    const result = Graph3();
    result.addEdge("Up", "Down");
    expect(addEdge(Graph3().adjacencyList, "Up", "Down")).toEqual(result.adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedUndirected -> Images -> graph-4.png
test("established an edge between vertices 3 and 0", () => {
    const result = Graph4();
    result.addEdge(3, 0);
    expect(addEdge(Graph4().adjacencyList, 3, 0)).toEqual(result.adjacencyList);
})

// Test Case 5: //? refer to Starter -> UnweightedUndirected -> Images -> graph-5.png
test("established an edge between vertices 5 and 3", () => {
    const result = Graph5();
    result.addEdge(5, 3);
    expect(addEdge(Graph5().adjacencyList, 5, 3)).toEqual(result.adjacencyList);
})

// Test Case 6: //? refer to Starter -> UnweightedUndirected -> Images -> graph-6.png
test("established an edge between vertices 'E' and 'X'", () => {
    const result = Graph6();
    result.addEdge("E", "X");
    expect(addEdge(Graph6().adjacencyList, "E", "X")).toEqual(result.adjacencyList);
})

// Test Case 7: //? refer to Starter -> UnweightedUndirected -> Images -> graph-7.png
test("established an edge between vertices 'E' and 'F'", () => {
    const result = Graph7();
    result.addEdge("E", "F");
    expect(addEdge(Graph7().adjacencyList, "E", "F")).toEqual(result.adjacencyList);
})

// Test Case 8: //? refer to Starter -> UnweightedUndirected -> Images -> graph-8.png
test("established an edge between vertices 'Yin' and 'Yang'", () => {
    const result = Graph8();
    result.addEdge("Yin", "Yang");
    expect(addEdge(Graph8().adjacencyList, "Yin", "Yang")).toEqual(result.adjacencyList);
})