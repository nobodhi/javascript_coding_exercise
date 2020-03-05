// selection sort

arr = [99,2,3,3,12,4,5]
console.log(arr)

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
