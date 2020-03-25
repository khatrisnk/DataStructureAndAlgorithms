const arr = [3, 2, 0, 8, 10, 9, 4, 2, 15, 14];

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function hepify(arr, i) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    let max = i;
    if (arr[l] && arr[l] > arr[max]) {
        max = l;
    }
    if (arr[r] && arr[r] > arr[max]) {
        max = r;
    }
    if (max !== i) {
        swap(arr, i, max);
    }
}

function maxHeap(arr, n, result) {
    if (n === 0) {
        return result;
    }
    const p = Math.ceil((n / 2) - 1);

    for (let i = p; i > -1; i--) {
        hepify(arr, i);
    }
    swap(arr, 0, n); 
    result.unshift(arr.pop());
    return maxHeap(arr, n - 1, result);
}

console.log(maxHeap(arr, arr.length - 1, []));