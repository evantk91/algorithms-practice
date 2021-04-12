function mergeSort(items) {
   //base case - list of 1 item is already sorted 
   if(items.length <= 1) {
      return items;       
   }

   //divide the list in half
   let midpoint = Math.floor(items.length / 2);
   let left = items.slice(0, midpoint);
   let right = items.slice(midpoint);
   console.log('left: ', left);
   console.log('right: ', right);

   //call merge sort recursively on the left and right half
   left = mergeSort(left);
   right = mergeSort(right);

   //merge the two halves and return
   return merge(left, right);
}

function merge(left, right) {
   //Given two ordered lists, merge them together in order
   //returning the merged list

   let merged = [];
   let leftIdx = 0;
   let rightIdx = 0;

   const minLen = Math.min(left.length, right.length);

   //move through the list until we have exhausted one
   while(leftIdx < left.length && rightIdx < right.length) {
      //if left's item is larger, append right's item
      //and increment the index  
      if(left[leftIdx] > right[rightIdx]) {
         merged.push(right[rightIdx]);
         rightIdx += 1;
      //Otherwise, append left's item and increment       
      } else {
         merged.push(left[leftIdx]);
         leftIdx += 1;    
      }
      
      // console.log(merged)
      // console.log('left index: ', leftIdx)
      // console.log('right index: ', rightIdx)
   }

   //append any leftovers
   merged = merged.concat(left.slice(leftIdx))
   merged = merged.concat(right.slice(rightIdx));

   //return the merged list
   return merged;
}

let items = [5, 4, 7, 1, 6];
// let merged = merge([1, 12, 13], [5, 6]);
// console.log(merged);
let sorted = mergeSort(items);
console.log(sorted);