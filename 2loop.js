// write a function that searches for na element in an array and return the index

const arr=[1,2,4,5,7,8,9,6,3,7]

function searcheArr(arr,k){

    for(i=0;i<arr.length;i++){
        
         if(arr[i]===k){
            return i
            
         }
        }
        return -1

}
console.log(searcheArr(arr,51))

// write a function that returns the number of negative numbers in an array

// const arr=[1,-2,4,-5,7,-8,9,6,-3,7]
function countNegativeNumbers(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        count=count+1; 
    }

  }
  return count
}
console.log(countNegativeNumbers(arr))


// write a function that returns the largest number in an array

// const arr=[1,-2,4,-5,7,-8,94,6,-3,7]

function largestNumber(arr){
    let largest=arr[0];
    for(i=0;i<arr.length;i++){
        if(largest>arr[i]){
            largest=arr[i];
        }
    }
    return largest
}
console.log(largestNumber(arr))
console.log(Math.min(...arr))


//  find the second largest number of arr

// const arr=[1,-2,4,-5,7,-8,94,6,-3,799]
function secondLargestNumber(arr){
    if(arr.length<2){
        return "Array should have at least two elements" 
    }
    let largest=arr[0]
    let secondLargest=arr[1]
    for(i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i]
        }
        else if(arr[i>secondLargest] && arr[i]!=largest){
            secondLargest=arr[i]
        }

    }
    return secondLargest
}
console.log(secondLargestNumber(arr))

