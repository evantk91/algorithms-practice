function quickSort(arr) {
   let leftIdx = 0;

   let pivotIdx = items.length - 1;
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

   return arr;
}

const items = [8, 3, 1, 7, 0, 10, 2]

console.log(quickSort(items));