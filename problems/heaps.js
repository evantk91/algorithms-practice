class Heap {
   constructor() {
      this.cbt = [];
      this.nextIndex = 0;    
   }

   upHeapify() {
      let childIndex = this.nextIndex;

      //continue up the tree
      while(childIndex >= 1) { 
         //calculate parent index 
         let parentIndex = Math.floor((childIndex - 1) / 2)
         let parentElement = this.cbt[parentIndex];
         let childElement = this.cbt[childIndex];
         
         //swap parent element and child element
         if(parentElement > childElement) {
            this.cbt[parentIndex] = childElement;
            this.cbt[childIndex] = parentElement;
            //set child index to parent index
            childIndex = parentIndex;
         } else {
            break;    
         }
      }
   }

   downHeapify() {
      let parentIndex = 0;
      
      while(parentIndex < this.nextIndex) {
         let leftChildIndex = 2 * parentIndex + 1;
         let rightChildIndex = 2 * parentIndex + 2;
         
         let parent = this.cbt[parentIndex];
         let leftChild = null;
         let rightChild = null;

         let minElement = parent;

         //check if left child exists
         if(leftChildIndex < this.nextIndex) {
            leftChild = this.cbt[leftChildIndex];
         }
         //check if right child exists
         if(rightChildIndex < this.nextIndex) {
            rightChild = this.cbt[rightChildIndex];
         }
         //compare with left child
         if(leftChild) {
             minElement = Math.min(parent, leftChild);
         }
         //compare with right child
         if(rightChild) {
            minElement = Math.min(rightChild, minElement);
         }
         //check if parent is rightly placed
         if(minElement === parent) {
            return;    
         }

         if(minElement === leftChild) {
            this.cbt[leftChildIndex] = parent;
            this.cbt[parentIndex] = minElement;
            parentIndex = leftChildIndex; 
         } else if(minElement === rightChild) {
            this.cbt[rightChildIndex] = parent;
            this.cbt[parentIndex] = minElement;
            parentIndex = rightChildIndex;    
         }
      } 
   }

   insert(data) {
      //insert element at the next index 
      this.cbt[this.nextIndex] = data;
      
      //heapify
      this.upHeapify();

      //increase index by 1
      this.nextIndex += 1;
   }

   size() {
      return this.nextIndex;    
   }

   remove() {
      if(this.size() === 0) {
         return null;       
      }

      //store root value
      this.nextIndex -= 1;    
      let remove = this.cbt[0];

      //replace root value with last element in heap
      let lastElement = this.cbt[this.nextIndex];
      this.cbt[0] = lastElement;

      //rather than removing element we set it to be replaced on the next insert
      this.cbt[this.nextIndex] = remove;
      this.downHeapify();

      return remove;
   }
}

let heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(40);
heap.insert(50);
heap.insert(30);
heap.insert(15);
heap.remove();
console.log(heap.cbt);