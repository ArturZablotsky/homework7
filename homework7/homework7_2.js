function uniqueValues(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
    }
    const arr1 = [1, 2, 3, 4, 5, 6, 7];
    const arr2 = [4, 7, 8, 9, 2, 10, 6];
    const uniqueArray = uniqueValues(arr1, arr2);
    console.log(uniqueArray);