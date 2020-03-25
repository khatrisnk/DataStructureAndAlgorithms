
// Insersion Sort
const sort = (arr) => {
    if(arr.length === 1 || arr.length === 0) {
      return arr;
    }
    if(arr[0] > arr[1]){
      let temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
    if(arr.length > 2) {
      let elementToBeInserted;
      for(let i = 2; i < arr.length; i++) {
        elementToBeInserted = arr[i];
        let k = i;
        for(let j = i - 1; j > -1; j--){
          if(arr[j] > elementToBeInserted){
            arr[k] = arr[j]
            k--;
            if(j == 0){
              arr[0] = elementToBeInserted;
            }
          } else {
            arr[k] = elementToBeInserted;
            // break if already sorted;
            break;
          }
        }
      }
    }
    return arr;
  };
  
  const arr = [9, 1, 3, 2, 0, 4, 15, 11, 12, 13];
  //[1,2,3,9,0,4,...]
  sort(arr);