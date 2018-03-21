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
let arr = [4, 1, 3, 9, 8, 5, 6, 7];
selectionSort(arr);
console.log(arr);