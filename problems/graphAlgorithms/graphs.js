class GraphNode {
   constructor(value) {
      this.value = value;
      this.children = [];    
   }

   addChild(newNode) {
       this.children.push(newNode);
   }

   removeChild(delNode) {
      if(this.children.includes(delNode)) {
         let removeIdx = this.children.indexOf(delNode); 
         this.children.splice(removeIdx, 1);    
      }    
   }
}

class Graph {
   constructor(nodeList) {
      this.nodes = nodeList;    
   }
   
   addEdge(node1, node2) {
      if(this.nodes.includes(node1) && this.nodes.includes(node2)) {
         node1.addChild(node2);
         node2.addChild(node1);    
      }    
   }

   removeEdge(node1, node2) {
      if(this.nodes.includes(node1) && this.nodes.includes(node2)) {
         node1.removeChild(node2);
         node2.removeChild(node1);    
      }    
   }

   printGraph() {
      this.nodes.forEach(node => {
         console.log('parent node: ', node.value)
         console.log('children:')
         node.children.forEach(child => {
            console.log(child.value)
         })
         console.log('\n')
      })
   }
}

module.exports = {
   GraphNode, 
   Graph,    
}