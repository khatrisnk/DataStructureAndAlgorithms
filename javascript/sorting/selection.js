// Selection Sort
const sort = (arr) => {
    if(arr.length === 1 || arr.length === 0) {
      return arr;
    }
  
    for(let i = 0; i < arr.length; i++) {
      let minimum = arr[i];
      let minElementIndex = i;
      for(j = i + 1; j < arr.length; j++){
        if(arr[j] < minimum){
          minimum = arr[j];
          minElementIndex = j;
        }
      }
      arr[minElementIndex] = arr[i];
      arr[i] = minimum;
    }
    return arr;
  };
  
  const arr = [9, 1, 3, 2, 0, 4, 15, 11, 12, 13];
  //[1,2,3,9,0,4,...]
  sort(arr);