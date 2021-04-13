class Graph {
   constructor() {
      this.nodes = new Set();
      this.neighbors = {};
      this.distances = {};
   }
   
   addNode(value) {
      this.nodes.add(value);    
   }

   addEdge(fromNode, toNode, distance) {
      this.neighbors[fromNode] 
         ? this.neighbors[fromNode].push(toNode)
         : this.neighbors[fromNode] = [toNode]
        
      this.neighbors[toNode]
         ? this.neighbors[toNode].push(fromNode)
         : this.neighbors[toNode] = [fromNode]
         
      this.distances[[fromNode, toNode]] = distance;
      this.distances[[toNode, fromNode]] = distance;  
   }
}

module.exports = {
   Graph,    
}

// let graph = new Graph();
// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addNode('D')
// graph.addNode('E')
// graph.addNode('F')
// graph.addEdge('A', 'B', 5)
// graph.addEdge('A', 'C', 4)
// graph.addEdge('A', 'D', 2)
// graph.addEdge('B', 'C', 2)
// graph.addEdge('B', 'F', 2)
// graph.addEdge('C', 'D', 1)
// graph.addEdge('C', 'E', 1)
// graph.addEdge('C', 'F', 3)
// graph.addEdge('E', 'F', 2)

// console.log(graph.distances);