const removeVertix = require("./problem");
const generateVertices = require("../../Starter/generateVertices");
const UDGraph = require("../../Starter/UnweightedDirected/UnweightedDirectedGraph");
const UUGraph = require("../../Starter/UnweightedUndirected/UnweightedUndirectedGraph");
const WDGraph = require("../../Starter/WeightedDirected/WeightedDirectedGraph");
const UDG1 = require("../../Starter/UnweightedDirected/Structure/graph-1");
const UUG2 = require("../../Starter/UnweightedUndirected/Structure/graph-2");
const WDG3 = require("../../Starter/WeightedDirected/Structure/graph-3");
const WUG1 = require("../../Starter/WeightedUndirected/Structure/graph-1");

// Test Case 1: //? refer to Starter -> UnweightedDirected -> Images -> graph-1.png
test("remove the vertix 'Yang' and all its relationships", () => {
    const result = new UDGraph();
    result.addVertix("Yin")
    expect(removeVertix(UDG1().adjacencyList, "Yang")).toEqual(result.adjacencyList);
})

// Test Case 2: //? refer to Starter -> UnweightedUndirected -> Images -> graph-2.png
test("remove the vertix 'FB' and all its relationships", () => {
    const vertices = ["Apple", "Netflix", "Google", "Amazon", "MS"];
    const result = new UUGraph();

    generateVertices(result, vertices);
    result.addEdge("Apple", "Netflix");
    result.addEdge("Apple", "Google");
    result.addEdge("Netflix", "Amazon");
    result.addEdge("Google", "MS");

    expect(removeVertix(UUG2().adjacencyList, "FB")).toEqual(result.adjacencyList);
})

// Test Case 3: //? refer to Starter -> WeightedDirected -> Images -> graph-3.png
test("remove the vertix 10 and all its relationships", () => {
    const vertices = [1, 7, 5];
    const result = new WDGraph();

    generateVertices(result, vertices);
    result.addEdge(1, 5, -5);
    result.addEdge(5, 7, 13);

    console.log(result.adjacencyList);

    expect(removeVertix(WDG3().adjacencyList, 10)).toEqual(result.adjacencyList);
})
