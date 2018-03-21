/**
 * @description
 * @author Scott<scott@erealmsoft.com>
 * @created 18-3-16
 */

'use strict';
const countTime = (num) => {
    console.time('firstTimer');
    for (let i = 0; i < num; i++) {

    }
    console.timeEnd('firstTimer');
};
countTime(127000000);