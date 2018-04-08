/**
 * @description
 * @author Scott<scott@erealmsoft.com>
 * @created 18-3-17
 */

'use strict';
const randomArr = require('./utils/radomArr');

const selectionSort = (arr, direction) => { // 0 从小到大， 1 从大到小
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (direction ? arr[j] > arr[index] : arr[j] < arr[index]) {
                index = j;
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
};
let arr = randomArr(0, 10, 6);
selectionSort(arr, 1);
console.log(arr);