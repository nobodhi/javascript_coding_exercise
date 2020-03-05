// bubble sort

arr = [99,2,3,3,12,4,5]
console.log(arr)

for (let idx=1;idx<arr.length;idx++) {
  for (let cmp=0;cmp<idx;cmp++) {
    if (arr[cmp]>arr[cmp+1]) {
      [arr[cmp+1], arr[cmp]] = [arr[cmp], arr[cmp+1]]
      console.log(arr)
    }
  }
}
