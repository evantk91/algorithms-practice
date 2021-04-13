function bubbleSort1(list) {
   for(let i = 0; i < list.length; i++) {
      for(let j = 1; j < list.length; j++) {
         let item = list[j];
         let prevItem = list[j - 1];

         if(prevItem <= item) {
            continue;    
         }

         list[j] = prevItem;
         list[j - 1] = item;
      }
   }
   //return list;    
}

function bubbleSort2(list) {
   let hour;
   let min;
   let prevHour;
   let prevMin;

   for(let i = 0; i < list.length; i++) {
      for(let j = 1; j < list.length; j++) {
         [hour, min] = list[j];
         [prevHour, prevMin] = list[j - 1];
         
         if(prevHour > hour || (prevHour === hour && prevMin > min)) {
            continue;
         }

         list[j] = [prevHour, prevMin];
         list[j - 1] = [hour, min];
      }    
   }
}

list1 = [16, 49, 3, 12, 56, 49, 55, 22, 13, 46, 19, 55, 46, 13, 25, 56, 9, 48, 45];
bubbleSort1(list1);
//console.log(list1);

list2 = [[24, 13], [21, 55], [23, 20], [22, 5], [24, 23], [21, 58], [24, 3]];
bubbleSort2(list2);
console.log(list2);