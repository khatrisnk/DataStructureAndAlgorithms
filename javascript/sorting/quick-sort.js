function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, 0, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

const arr = [1, 5, 2, 8, 3, 10, 20, 13, 11, 12, 15, 14];
console.log('Before: ', arr);
quickSort(arr, 0, arr.length - 1);
console.log('After: ', arr);
