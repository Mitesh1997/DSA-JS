// Bubble Sort


function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped =false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range of comparison
    } while (swapped);
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("sorted array:",bubbleSort(array));
