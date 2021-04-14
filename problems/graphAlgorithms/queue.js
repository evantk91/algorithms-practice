class Queue {
   constructor() {
      this.queue = [];    
   }
   
   enq(value) {
      this.queue.push(value); 
   }

   deq() {
      if(this.queue.length > 0) {
         return this.queue.shift(); 
      } else {
         return null;    
      }    
   }

   length() {
      return this.queue.length;    
   }
}

module.exports = {
   Queue,    
}