const addEdge = require("./problem");
const Graph1 = require("../../../Starter/UnweightedDirected/Structure/graph-1");
const Graph2 = require("../../../Starter/UnweightedDirected/Structure/graph-2");
const Graph3 = require("../../../Starter/UnweightedDirected/Structure/graph-3");
const Graph4 = require("../../../Starter/UnweightedDirected/Structure/graph-4");
const Graph5 = require("../../../Starter/UnweightedDirected/Structure/graph-5");
const Graph6 = require("../../../Starter/UnweightedDirected/Structure/graph-6");
const Graph7 = require("../../../Starter/UnweightedDirected/Structure/graph-7");
const Graph8 = require("../../../Starter/UnweightedDirected/Structure/graph-8");
const Graph9 = require("../../../Starter/UnweightedDirected/Structure/graph-9");
const Graph10 = require("../../../Starter/UnweightedDirected/Structure/graph-10");
const Graph11 = require("../../../Starter/UnweightedDirected/Structure/graph-11");
const Graph12 = require("../../../Starter/UnweightedDirected/Structure/graph-12");

// Test Case 1: //? refer to Starter -> UnweightedDirected -> Images -> graph-1.png
test("established an edge between vertices 'Yin' and 'Yang'", () => {
    const result = Graph1();
    result.addEdge("Yin", "Yang");
    console.log(Graph1().adjacencyList["Yang"], result.adjacencyList);
    expect(addEdge(Graph1().adjacencyList, "Yin", "Yang")).toEqual(result.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedDirected -> Images -> graph-2.png
test("established an edge between vertices 3 and 1", () => {
    const result = Graph2();
    result.addEdge(3, 1);
    expect(addEdge(Graph2().adjacencyList, 3, 1)).toEqual(result.adjacencyList);
})

// Test Case 3: //? refer to Starter -> UnweightedDirected -> Images -> graph-3.png
test("established an edge between vertices -3 and -1", () => {
    const result = Graph3();
    result.addEdge(-3, -1);
    expect(addEdge(Graph3().adjacencyList, -3, -1)).toEqual(result.adjacencyList);
})

// Test Case 4: //? refer to Starter -> UnweightedDirected -> Images -> graph-4.png
test("established an edge between vertices 'S' and 'T'", () => {
    const result = Graph4();
    result.addEdge("S", "T");
    expect(addEdge(Graph4().adjacencyList, "S", "T")).toEqual(result.adjacencyList);
})

// Test Case 5: //? refer to Starter -> UnweightedDirected -> Images -> graph-5.png
test("established an edge between vertices 6 and 8", () => {
    const result = Graph5();
    result.addEdge(6, 8);
    expect(addEdge(Graph5().adjacencyList, 6, 8)).toEqual(result.adjacencyList);
})

// Test Case 6: //? refer to Starter -> UnweightedDirected -> Images -> graph-6.png
test("established an edge between vertices 'M' and 'R'", () => {
    const result = Graph6();
    result.addEdge("M", "R");
    expect(addEdge(Graph6().adjacencyList, "M", "R")).toEqual(result.adjacencyList);
})

// Test Case 7: //? refer to Starter -> UnweightedDirected -> Images -> graph-7.png
test("established an edge between vertices 3 and 4", () => {
    const result = Graph7();
    result.addEdge(3, 4);
    expect(addEdge(Graph7().adjacencyList, 3, 4)).toEqual(result.adjacencyList);
})

// Test Case 8: //? refer to Starter -> UnweightedDirected -> Images -> graph-8.png
test("established an edge between vertices 21 and 33", () => {
    const result = Graph8();
    result.addEdge(21, 33);
    expect(addEdge(Graph8().adjacencyList, 21, 33)).toEqual(result.adjacencyList);
})

// Test Case 9: //? refer to Starter -> UnweightedDirected -> Images -> graph-9.png
test("established an edge between vertices 'Thanos' and 'Thanos'", () => {
    const result = Graph9();
    result.addEdge("Thanos", "Thanos");
    expect(addEdge(Graph9().adjacencyList, "Thanos", "Thanos")).toEqual(result.adjacencyList);
})

// Test Case 10: //? refer to Starter -> UnweightedDirected -> Images -> graph-10.png
test("established an edge between vertices 6 and 7", () => {
    const result = Graph10();
    result.addEdge(6, 7);
    expect(addEdge(Graph10().adjacencyList, 6, 7)).toEqual(result.adjacencyList);
})

// Test Case 11: //? refer to Starter -> UnweightedDirected -> Images -> graph-11.png
test("established an edge between vertices 1 and 4", () => {
    const result = Graph11();
    result.addEdge(1, 4);
    expect(addEdge(Graph11().adjacencyList, 1, 4)).toEqual(result.adjacencyList);
})

// Test Case 12: //? refer to Starter -> UnweightedDirected -> Images -> graph-12.png
test("established an edge between vertices 1 and 22", () => {
    const result = Graph12();
    result.addEdge(1, 22);
    expect(addEdge(Graph12().adjacencyList, 1, 22)).toEqual(result.adjacencyList);
})