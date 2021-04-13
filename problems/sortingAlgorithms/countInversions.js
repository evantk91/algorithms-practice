function countInversions(arr) {
   //given an array as input
   //returns a count of the total number of inversions present in the input

   let count = 0;

   for(let i = 0; i < arr.length; i++) {
      for(let j = i; j < arr.length; j++) {
         if(arr[i] > arr[j]) {
            count++;    
         }    
      }    
   }

   return count;
}

module.exports = {
   countInversions,    
}