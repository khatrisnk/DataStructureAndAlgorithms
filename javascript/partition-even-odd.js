const arr = [2, 3, 9, 2, 21, 5, 19, 20, 16, 26, 4];

const isEven = (a) => {
    return a % 2 === 0;
};

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const partition = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    let cond = isEven(arr.length) ? (j !== i + 1) : (i !== j);
    while (cond) {
        if (!isEven(arr.length) ? i === j : j === i + 1) {
            return;
        }

        // Both Even
        if (isEven(arr[i]) && isEven(arr[j])) {
            j--;
            continue;
        }

        // i = Even and j = Odd
        if (isEven(arr[i]) && !isEven(arr[j])) {
            swap(arr, i, j);
            i++;
            j--;
            continue;
        }

        // Both Odd
        if (!isEven(arr[i]) && !isEven(arr[j])) {
            i++;
            continue;
        }

        // i = Odd and j = Even
        if (!isEven(arr[i]) && isEven(arr[j])) {
            i++;
            j--;
            continue;
        }
    }
}
console.log(arr);
partition(arr);
console.log(arr);