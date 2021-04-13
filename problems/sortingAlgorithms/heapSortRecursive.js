function heapify(arr, n, i) {
   let maxIdx = i;
   let leftIdx = 2 * i + 1;
   let rightIdx = 2 * i + 2;

   if(leftIdx < n && arr[i] < arr[leftIdx]) {
      maxIdx = leftIdx;    
   }

   if(rightIdx < n && arr[maxIdx] < arr[rightIdx]) {
      maxIdx = rightIdx;    
   }

   if(maxIdx !== i) {
       let tmp = arr[i];
       arr[i] = arr[maxIdx];
       arr[maxIdx] = tmp;
       heapify(arr, n, maxIdx);
   }
}

function heapSortRecursive(arr) {
    //call heapify on each node
    //create max heap from array recursively 
    for(let i = arr.length - 1; i >= 0; i--) {
       heapify(arr, arr.length, i);
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        //put sorted number at the end of the array
        let tmp = arr[i]
        arr[i] = arr[0]
        arr[0] = tmp
        //call heapify on the array excluding the sorted number
        heapify(arr, i, 0);
    }
}

module.exports = {
   heapSortRecursive    
}