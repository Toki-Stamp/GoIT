/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/find-duplicates */

/* Find Duplicates */

/*
 Given an array, find the duplicates in that array,
 and return a new array of those duplicates.
 The elements of the returned array should appear
 in the order when they first appeared as duplicates.

 Note: numbers and their corresponding string
 representations should not be treated as duplicates
 (i.e., '1' !== 1).

 Examples

 [1, 2, 4, 4, 3, 3, 1, 5, 3, '5']  ==>  [4, 3, 1]
 [0, 1, 2, 3, 4, 5]                ==>  []

*/

function duplicates(arr) {
    var duplicates = [];

    arr.forEach(function (value, index, array) {
        var hasNext = (array.indexOf(value, index + 1) !== -1),
            unique  = (hasNext ? (duplicates.indexOf(value) === -1) : false);

        if (hasNext && unique) {
            duplicates.push(value);
        }
    });

    return duplicates;
}

var arr = [1, 2, 4, 4, 3, 3, 1, 5, 3, '5'];

console.log(arr, '===>', duplicates(arr));