const _ = require('lodash');

const sorter = ((arr, direction='ASC') => {
	// for (let i = 0; i < arr.length; i++) {
 //    for (let j = 0; j < (arr.length - i - 1); j++) {
 //      if (arr[j] > arr[j + 1]) {
 //        //switch spaces if the earlier one is bigger than the later one
 //        const smaller = arr[j + 1];
 //        arr[j + 1] = arr[j];
 //        arr[j] = smaller;
 //      }
 //    }
 //  }
 	arr = _.sortBy(arr)
  if (direction ==='DESC') {
  	arr = arr.reverse()
  // 	for (let i = 0; i < arr.length; i++) {
  //   	for (let j = 0; j < (arr.length - i - 1); j++) {
  //     	if (arr[j] < arr[j + 1]) {
  //       //switch spaces if the earlier one is smaller than the later one
  //       	const bigger = arr[j + 1];
  //       	arr[j + 1] = arr[j];
  //       	arr[j] = bigger;
  //     }
  //   }
  // }
  }
	return arr;
});

module.exports = sorter;