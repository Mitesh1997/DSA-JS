// Selection Sort

// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         // Find the minimum element in unsorted array
//         let minIdx = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         // Swap the found minimum element with the first element
//         [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//     }
//     return arr;
// }
// // Example usage:
// const array = [64, 25, 12, 22, 11];
// console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 64]


var sortArray = function(nums) {
    let n=nums.length;
    for(let i=0;i<n-1;i++){

        let min =i;
        for(let j=i+1;j<n;j++){
            if(a[j]<a[min]){
                min=j;
            }

        }
        if(min!=i){

            [arr[i], arr[min]] = [arr[min], arr[i]];
        }

    }
    return nums;
}