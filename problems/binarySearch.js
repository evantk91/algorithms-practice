function binarySearch(arr, target) {
   //given a sorted array of items and the element you are searching for
   //return the index of the target, return -1 if the target is not found
   
   let startIndex = 0;
   let endIndex = arr.length - 1;
   
   while(startIndex <= endIndex) {
      let midIndex = Math.floor((startIndex + endIndex) / 2);
      let midElement = arr[midIndex];
      
      if(target === midElement) {
         return midIndex;
      } else if(target < midElement) {
         endIndex = midIndex - 1; 
      } else {
         startIndex = midIndex + 1;    
      }
   }

   return -1;
}

function binarySearchRecursive(arr, target, startIndex, endIndex) {
   if(startIndex > endIndex) {
      return -1;
   }
   
   let midIndex = Math.floor((startIndex + endIndex) / 2);
   let midElement = array[midIndex];

   if(midElement === target) {
      return midIndex;
   } else if(target < midElement) {
      return binarySearchRecursive(array, target, startIndex, midIndex - 1);
   } else {
      return binarySearchRecursive(array, target, midIndex + 1, endIndex);
   }
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 4;
const startIndex = 0;
const endIndex = 9;
console.log(binarySearchRecursive(array, target, startIndex, endIndex))

module.exports = {
   binarySearch,
   binarySearchRecursive, 
}