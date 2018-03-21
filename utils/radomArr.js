/**
 * @description
 * @author Scott<scott@erealmsoft.com>
 * @created 18-3-21
 */

'use strict';

const randomArray = (min, max, length) => {
    let randomArr = [];
    let i = 0;
    while (i < length) {
        let randomNum = parseInt(Math.random()*(max - min + 1) + min);
        randomArr.push(randomNum);
        i++;
    }
    return randomArr;
};
module.exports = randomArray;