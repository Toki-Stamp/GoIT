/**
 * Created by Fomichev Yuri on 18.03.2018
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* http://www.codewars.com/kata/basic-js-calculating-averages */

/* Basic JS - Calculating averages */

/*
 Let's build a calculator that can calculate
 the average for an arbitrary number of arguments.

 The test expects you to provide a Calculator object
 with an average method:

 Calculator.average()

 The test also expects that when you pass no arguments,
 it returns 0. The arguments are expected to be integers.

 It expects Calculator.average(3, 4, 5) to return 4.

*/

var Calculator = {
    average: function () {
        return [].reduce.call(arguments, function (accumulator, currentItem, index, array) {
            return (
                ((index + 1) < array.length) ?
                    (accumulator + currentItem) :
                    ((accumulator + currentItem) / array.length)
            );
        }, 0);
    }
};

console.log(Calculator.average(3, 4, 5));
console.log(Calculator.average(2, 4, 9));
console.log(Calculator.average());