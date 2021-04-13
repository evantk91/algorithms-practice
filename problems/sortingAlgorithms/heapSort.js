function heapSort(arr) {
   //convert an array in place into a max heap

   let maxHeapArr = maxHeap(arr);
   let sorted = [];
   sorted.unshift(maxHeapArr[0]);
   maxHeapArr[0] = maxHeapArr[maxHeapArr.length - 1];
   maxHeapArr.pop();

   while(maxHeapArr.length !== 0) {
      maxHeapArr = maxHeap(maxHeapArr);
      sorted.unshift(maxHeapArr[0]);
      maxHeapArr[0] = maxHeapArr[maxHeapArr.length - 1];
      maxHeapArr.pop();
   }

   return sorted;
}

function maxHeap(arr) {
   //given an array, creates a max heap

   let maxHeap = [];

   for(let i = 0; i < arr.length; i++) {
      maxHeap.push(arr[i]);
      upHeapify(maxHeap, i)
   }

   return maxHeap;
}

function upHeapify(arr, childIdx) {
   while(childIdx >= 1) {
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parentVal = arr[parentIdx];
      let childVal = arr[childIdx];
      
      if(parentVal < childVal) {
         arr[parentIdx] = childVal;
         arr[childIdx] = parentVal;
         childIdx = parentIdx;
      } else {
         break;
      }
   }
}

const arr = [3, 7, 4, 6, 1, 0, 9, 8, 4, 3, 5]
let sorted = heapSort(arr);
console.log(sorted);

module.exports = {
   heapSort,    
}