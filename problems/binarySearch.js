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

function findFirst(target, arr, start, end) {
   let index = binarySearchRecursive(arr, target, start, end);
   if(!index) {
      return null;    
   }
   
   while(arr[index] === target) {
      if(index === 0) {
         return 0;    
      }

      if(arr[index-1] === target) {
         index -= 1;
      } else {
         return index;
      }
   }
}

function contains(target, arr) {
   if(arr.length === 0) {
      return false;    
   }
   let center = Math.floor((arr.length - 1) / 2);
   if(arr[center] === target) {
      return true;
   } else if(arr[center] < target) {
      return contains(target, arr.slice(center + 1))
   } else {
      return contains(target, arr.slice(0, center))
   }   
}

function firstAndLastIndex(arr, number) {
   let firstIndex = findFirstIndex(arr, number, 0, arr.length - 1);
   let lastIndex = findLastIndex(arr, number, 0, arr.length - 1);
   return [firstIndex, lastIndex]; 
}

function findFirstIndex(arr, number, startIndex, endIndex) {
   if(startIndex > endIndex) {
      return -1;    
   }       
   let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

   if(arr[midIndex] === number) {
      let currentStartPos = findFirstIndex(arr, number, startIndex, midIndex - 1);
      if(currentStartPos !== -1) {
         let startPos = currentStartPos;
      } else {
         startPos = midIndex;    
      }
      return startPos;
   } else if(arr[midIndex] < number) {
      return findFirstIndex(arr, number, midIndex + 1, endIndex);    
   } else {
      return findFirstIndex(arr, number, startIndex, midIndex - 1);    
   }
}

function findLastIndex(arr, number, startIndex, endIndex) {
   if(startIndex > endIndex) {
      return -1;    
   }
   let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

   if(arr[midIndex] === number) {
      let currentEndPos = findLastIndex(arr, number, midIndex + 1, endIndex);
      if(currentEndPos !== -1) {
         let endPos = currentEndPos;
      } else {
         endPos = midIndex;    
      }
      return endPos;
   } else if(arr[midIndex] < number) {
      return findLastIndex(arr, number, midIndex + 1, endIndex);    
   } else {
      return findLastIndex(arr, number, startIndex, midIndex - 1);    
   }    
}
 
const array = [0, 1, 3, 3, 5, 5, 5, 7, 8, 9, 10];
const target = 5;
const startIndex = 0;
const endIndex = 9;
console.log(firstAndLastIndex(array, target));

module.exports = {
   binarySearch,
   binarySearchRecursive, 
}