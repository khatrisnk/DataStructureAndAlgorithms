// Merge sort
function mergeSort(arr) {
    //console.log(arr)
    const length = arr.length;
    if(length === 1){
      return arr;
    }
    const mid = Math.floor(length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, length);
    return merge(mergeSort(left), mergeSort(right))
  }
  
  function merge(arr1, arr2){
    console.log(arr1, arr2);
    const result = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length){
      if(arr1[i] > arr2[j]){
        result.push(arr2[j])
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
    while(i < arr1.length){
      result.push(arr1[i]);
      i++;
    }
    while(j < arr2.length){
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
  
  const arr = [99, 44, 6, 2, 1, 5, 5, 63, 87, 283, 4, 0];
  mergeSort(arr);