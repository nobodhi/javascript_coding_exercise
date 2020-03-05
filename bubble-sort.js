/**
 * @public
 * @function bubbleSort sort an arry
 * @param {Array} arr the array to sort
* @returns {Array} the sorted array
 */
const bubbleSort = (arr) => {
  for (let idx=1;idx<arr.length;idx++) {
    for (let cmp=0;cmp<idx;cmp++) {
      if (arr[cmp]>arr[cmp+1]) {
        [arr[cmp+1], arr[cmp]] = [arr[cmp], arr[cmp+1]]
        console.log(arr)
      }
    }
  }
  return arr
}

// testing
// arr = [99,2,3,3,12,4,5]
// console.log(arr)
// selectionSort(arr)

module.exports = bubbleSort;
