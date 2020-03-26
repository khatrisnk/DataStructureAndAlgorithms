const getMax = (arr) => {
    return Math.max.apply(null, arr);
};

const countingSort = (arr, n, exp) => {
    const out = Array(n);
    const count = Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] = count[i] + count[i - 1];
    }
    
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        out[count[index] - 1] = arr[i];
        count[index]--;
    }
    for (i = 0; i < n; i++) {
        arr[i] = out[i];
    }
};

const redixSort = (arr) => {
    const max = getMax(arr);

    for (let i = 1; Math.floor(max / i) > 0; i = i * 10) {
        countingSort(arr, arr.length, i);
    }

};

const arr = [6, 0, 20, 55, 91, 100, 102, 43, 33, 23, 23];

redixSort(arr);
console.log(arr);