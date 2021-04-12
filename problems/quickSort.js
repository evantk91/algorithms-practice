function quickSort(arr) {
   quickSortRecursive(arr, 0, arr.length - 1);
}

function quickSortRecursive(arr, start, end) {
   //base case
   if(end <= start) {
      return;   
   }

   //run one iteration of quick sort
   let pivotIdx = quickSortIteration(arr, start, end);
   //sort array before pivot and after pivot recursively
   quickSortRecursive(arr, start, pivotIdx - 1);
   quickSortRecursive(arr, pivotIdx + 1, end);
}

function quickSortIteration(arr, start, end) {
   let leftIdx = start;
   let pivotIdx = end;
   let pivotValue = items[pivotIdx];

   while(pivotIdx !== leftIdx) {
       let item = items[leftIdx];
       if(item <= pivotValue) {
          leftIdx += 1
          continue;    
       }
       //place item before the pivot at left index
       items[leftIdx] = items[pivotIdx - 1];
       //shift pivot one to the left
       items[pivotIdx - 1] = pivotValue;
       //place item at pivot's previous location
       items[pivotIdx] = item;
       //update pivot index
       pivotIdx -= 1;
   }

   return pivotIdx;
}

const items = [12, 9, 10];
quickSort(items);
console.log(items);