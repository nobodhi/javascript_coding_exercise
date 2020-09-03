/**
 * @public
 * @function selectionSort sort an arry
 * @param {Array} arr the array to sort
* @returns {Array} the sorted array
 */
const selectionSort = (arr) => {
  for (let idx=0;idx<arr.length-1;idx++) {
    let smallest = idx
    for (let cmp=idx+1;cmp<arr.length;cmp++) {
      if (arr[smallest]>arr[cmp]) {
        smallest = cmp
      }
    }
    if (smallest != idx) {
      [arr[smallest], arr[idx]] = [arr[idx], arr[smallest]]
      console.log(arr)
    }
  }
  return arr
}

// testing
// arr = [99,2,3,3,12,4,5]
// console.log(arr)
// selectionSort(arr)

module.exports = selectionSort;
