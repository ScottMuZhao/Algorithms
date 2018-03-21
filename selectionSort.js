/**
 * @description
 * @author Scott<scott@erealmsoft.com>
 * @created 18-3-17
 */

'use strict';
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
};
let arr1 = [4, 1, 3, 9, 8, 5, 6, 7];
selectionSort(arr1);
console.log(arr1);

let arr2 = [4.4, 1.4, 3.2, 9.9, 8.4, 5.7, 6, 7];
selectionSort(arr2);
console.log(arr2);

let arr3 = ['d', 'c', 'b', 'a'];
selectionSort(arr3);
console.log(arr3);