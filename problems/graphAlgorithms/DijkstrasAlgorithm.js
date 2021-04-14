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

function dijkstra(graph, source) {
   const result = {};
   result[source] = 0
   
   graph.nodes.forEach(node => {
      if(node !== source) {
         result[node] = null;    
      }        
   })

   let unvisited = new Set(graph.nodes)
   const path = {}

   //As long as unvisited is not empty
   while(unvisited) {
      let minNode = null;

      //find the unvisited node having the smallest known distance from the source
      unvisited.forEach(node => {
         if(result[node]) {
            if(!minNode) {
               minNode = node;    
            } else if(result[node] < result[minNode]) {
               minNode = node; 
            }   
         }    
      })

      if(!minNode) {
         break;    
      }
      
      //from the current node, find all the unvisited neighbors. For this, you have to calculate the distance of each unvisited neighbor

      //if the calculated distance of the unvisited neighbor is less than the known distance in the result dictionary, update the shortest distance in result

      //if there is an update in the result, you need to update the path dictionary for the same key

      //remove the node from the unvisited set

   }

   return result;
}

console.log(dijkstra(graph, 'A'))
console.log(graph.nodes)