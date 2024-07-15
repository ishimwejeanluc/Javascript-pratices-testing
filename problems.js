function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let result=[];
  for (let i = 1;i < arr.length;i+=2) {
    if( i%2 === 1){
       result.push(arr[i]);
    }
}
return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let result=[];
    for (let i = arr.length-1;i >= 0;i--) {
      if( i%2 === 1){
         result.push(arr[i]);
      }
  }
  return result;

}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        if ((i & (i - 1)) === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let result = [];
    let power = 1;

    while (power < arr.length) {
        result.push(arr[power]);
        power *= n;
    }

    return result;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let result=[];
    if(arr.length % 2 === 1){
        let midIndex = (arr.length-1)/2;
        for(let i=0; i<= midIndex; i++){
          result.push(arr[i])
        }
        return result;
    }
    else{
        for(let i =0; i< arr.length/2; i++){
         result.push(arr[i]);
        }
        return result;
    }
    }


function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let result=[];
    if(arr.length % 2 === 1){
        let midIndex = (arr.length-1)/2;
        for(let i=arr.length-1; i > midIndex; i++){
          result.push(arr[i])
        }
        return result;
    }
    else{
        for(let i =arr.length; i >= arr.length/2; i++){
         result.push(arr[i]);
        }
        return result;
    }
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
