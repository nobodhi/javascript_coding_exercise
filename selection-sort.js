// selection sort

arr = [99,2,3,3,12,4,5]
console.log(arr)

for (idx of arr.keys()) {
  if (idx < arr.length && arr[idx+1] < arr[idx]) {
    console.log("test succeeded for", arr[idx], arr[idx+1], idx, idx+1)
    let temp = arr[idx+1]
    // [arr[idx], arr[idx+1]] = [arr[idx+1], arr[idx]]
    arr[idx+1] = arr[idx]
    arr[idx] = temp
    console.log(arr)
  }
  else
    console.log("test failed for", arr[idx], arr[idx-1])
}
console.log(arr)

