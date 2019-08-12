__.binarySearch = (arr, val) => {
 let beginning = 0;
 let end = arr.length - 1;
 let middle;

 while(beginning <= end) {
   middle = Math.floor((beginning + end) / 2)
   if(val === arr[middle]) {
     return middle;
   }
   else {
     if(val > arr[middle]) {
       beginning = middle + 1
     }
     else {
       end = middle - 1
     }
   }
 }
}


//with binary search we are always checking the middle 
//and either incrementing the middle or decremnting it


