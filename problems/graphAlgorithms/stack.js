class Stack {
   constructor() {
      this.list = [];
   }
   
   push(value) {
      this.list.push(value);    
   }

   pop() {
      return this.list.pop();    
   }

   top() {
      if(this.list.length > 0) {
         return this.list[this.list.length - 1];
      } else {
         return null;
      }    
   }

   isEmpty() {
      return this.list.length === 0;    
   }
}

module.exports = {
   Stack,    
}