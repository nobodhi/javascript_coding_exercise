// bubble sort

arr = [99,2,3,3,12,4,5]
console.log(arr)

for (let idx=1;idx<=arr.length;idx++) {
  for (let chk=0;chk<idx;chk++) {
    if (arr[chk]>arr[chk+1]) {
      [arr[chk+1], arr[chk]] = [arr[chk], arr[chk+1]]
      console.log(arr)
    }
  }
}

