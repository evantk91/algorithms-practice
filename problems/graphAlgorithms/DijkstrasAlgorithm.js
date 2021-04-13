const { Graph } = require('./graphs.js');

let graph = new Graph();
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
graph.addEdge('A', 'B', 5)
graph.addEdge('A', 'C', 4)
graph.addEdge('A', 'D', 2)
graph.addEdge('B', 'C', 2)
graph.addEdge('B', 'F', 2)
graph.addEdge('C', 'D', 1)
graph.addEdge('C', 'E', 1)
graph.addEdge('C', 'F', 3)
graph.addEdge('E', 'F', 2)

console.log(graph.distances);