function divideArray() {
    const arrayInput = document.getElementById('arrayInput').value;
    const maxSum = parseInt(document.getElementById('maxSumInput').value);
    
    if (!arrayInput || isNaN(maxSum) || maxSum <= 0) {
        alert('Please enter a valid array and a positive integer for the maximum sum.');
        return;
    }

    const array = arrayInput.split(',').map(num => parseInt(num.trim()));
    if (array.some(isNaN)) {
        alert('Please enter a valid array of integers.');
        return;
    }

    const result = divide(array, maxSum);
    
    document.getElementById('chunksResult').innerText = JSON.stringify(result);
}

function divide(arr, n) {
    const result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentChunk.push(arr[i]);
            currentSum += arr[i];
        } else {
            if (currentChunk.length > 0) {
                result.push(currentChunk);
            }
            currentChunk = [arr[i]];
            currentSum = arr[i];
        }
    }

    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
}
