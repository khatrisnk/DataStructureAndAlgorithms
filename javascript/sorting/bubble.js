// Bubble Sort
const sort = (arr) => {
    if(arr.length === 1 || arr.length === 0) {
      return arr;
    }
  
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j+1]) {
          //Swap the numbers
          let temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
      console.log(arr)
    }
  };
  
  const arr = [9, 1, 3, 2, 0, 4, 15, 11, 12, 13];
  //[1,2,3,9,0,4,...]
  sort(arr);