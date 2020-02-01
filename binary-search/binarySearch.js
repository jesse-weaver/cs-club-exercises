/*
 *
 * Binary Search Algorithm
 */

function binarySearch(searchArray, n) {
   function search(searchArray, n, high, low) {
     if (typeof high === 'undefined') {
       high = searchArray.length;
     }
     if (typeof low === 'undefined') {
       low = 0;
     }
     console.log('------------------------------');
     console.log('searching sub array: ', searchArray.slice(low, high));
     const midpoint = Math.floor((high - low) / 2) + low;
     console.log('midpoint is ', midpoint);

     if (n === searchArray[midpoint]) {
       console.log('found n at position: ', midpoint);
       return midpoint;
     }

     if ((high - low) === 1) {
       console.log('Did not find number in array.');
       return false;
     }

     if (n > searchArray[midpoint]) {
       low = midpoint + 1;
       //console.log('new low: ', low);
       //console.log('new high: ', high);
     } else {
       high = midpoint;
       //console.log('new low: ', low);
       //console.log('new high: ', high);
     }
     return search(searchArray, n, high, low);
   }

   return search(searchArray, n, searchArray.length, 0, 0);
}

binarySearch([2, 3, 4, 6, 9, 13, 15, 18, 23, 42, 55, 58, 66, 68, 77], 3);