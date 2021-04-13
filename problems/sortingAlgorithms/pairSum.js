function pairSum(arr, target) {
    //given an input array and target, find the two values whose sum is equal to the target
    //return the numbers as a sorted list
    //solve without using extra space

   arr.sort((a, b) => a - b);

   let frontIdx = 0;
   let backIdx = arr.length - 1;

   while(frontIdx < backIdx) {
      let front = arr[frontIdx];
      let back = arr[backIdx];
      
      if(front + back === target) {
         return [front, back]
      } else if(front + back < target) {
         frontIdx += 1;
      } else {
         backIdx -= 1;    
      }

   }

   return [null, null];
}

let input = [2, 11, 7, 15]
let target = 30

console.log(pairSum(input, target))